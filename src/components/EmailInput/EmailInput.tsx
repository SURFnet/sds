import React, {useEffect, useState} from "react";
import "./EmailInput.scss";
import {isEmpty, stopEvent} from "../../common/utils";
import Tooltip from "../Tooltip/Tooltip";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";
import {ReactComponent as IdIcon} from "../../icons/functional-icons/id-2.svg";

export const validEmailRegExp = /^\S+@\S+$/;

export interface EmailInputProps {
    name: string,
    emails: Array<string>,
    addEmails: Function,
    removeMail: Function,
    errorMessage: string,
    inviteesMessagesTooltip?: string,
    inviteesPlaceholder?: string,
    pinnedEmails?: Array<string>,
    error?: boolean,
    validateExistingMails?: boolean
}

const EmailInput = (props: EmailInputProps) => {
    const [emailErrors, setEmailErrors] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const filterInvalidEmails = (mail: string) => {
        const indexOf = mail.indexOf("<");
        mail = indexOf > -1 && indexOf > -1 ? mail.substring(indexOf + 1, mail.length - 1) : mail;
        return isEmpty(mail) || !validEmailRegExp.test(mail.trim());
    }

    useEffect(() => {
        if (props.validateExistingMails) {
            const invalidEmails = props.emails.filter(filterInvalidEmails);
            setEmailErrors(invalidEmails);
        }

    }, [props]);

    const internalOnChange = (e: any) => {
        if (!["Enter", "Spacebar", "Backspace", "Tab"].includes(e.key)) {
            setEmailErrors([]);
        }
        setValue(e.target.value);
    }

    const displayEmail = (email: string) => {
        const indexOf = email.indexOf("<");
        if (indexOf > -1) {
            return <Tooltip tip={email.substring(indexOf + 1, email.length - 1)}
                            standalone={true}
                            children={<span>{email.substring(0, indexOf).trim()}</span>}/>;
        }
        return <span>{email}</span>;
    }

    const validateEmail = (part: string, invalidEmails: Array<string>) => {
        const hasLength = part.trim().length > 0;
        const valid = hasLength && validEmailRegExp.test(part);
        if (!valid && hasLength) {
            invalidEmails.push(part.trim());
        }
        return valid;
    }

    const internalAddEmail = (e: any) => {
        if (isEmpty(e.key) && isEmpty(e.target.value)) {
            return;
        }
        const email = e.target.value;
        const invalidEmails: Array<string> = [];
        const delimiters = [",", " ", ";", "\n", "\t"];
        let emails;
        if (!isEmpty(email) && email.indexOf("<") > -1 && email.indexOf(">") > -1) {
            emails = email.split(/[,\n\t;]/)
                .map((e: string) => e.trim())
                .filter((part: string) => {
                    const indexOf = part.indexOf("<");
                    part = indexOf > -1 ? part.substring(indexOf + 1, part.length - 1) : part;
                    return validateEmail(part, invalidEmails);
                });
        } else if (!isEmpty(email) && delimiters.some(delimiter => email.indexOf(delimiter) > -1)) {
            const replacedEmails = email.replace(/[;\s]/g, ",");
            const splitEmails = replacedEmails.split(",");
            emails = splitEmails
                .filter((part: string) => validateEmail(part, invalidEmails));
        } else if (!isEmpty(email)) {
            const valid = validEmailRegExp.test(email.trim());
            if (valid) {
                emails = [email];
            } else {
                invalidEmails.push(email.trim());
            }
        }
        setEmailErrors((!isEmpty(email) && !isEmpty(invalidEmails)) ? invalidEmails : []);
        // @ts-ignore
        const uniqueEmails = [...new Set(emails)];
        if (!isEmpty(uniqueEmails)) {
            props.addEmails(uniqueEmails);
        }
        setValue("");
    };

    const internalRemoveMail = (mail: string) => (e: any) => {
        setEmailErrors([]);
        props.removeMail(mail)(e);
    }

    return (
        <div className={`sds--email-input ${props.error ? "error" : ""}`}>
            <label htmlFor={props.name}>{props.name}
                {props.inviteesMessagesTooltip && <Tooltip
                    tip={props.inviteesMessagesTooltip}/>}
            </label>
            <div className={`inner-email-field ${props.error ? "error" : ""}`}>
                {props.emails
                    .filter((mail: string) => !filterInvalidEmails(mail))
                    .map((mail: string, index: number) =>
                        <div key={index} className="email-tag">
                            {displayEmail(mail)}
                            {(props.pinnedEmails || []).includes(mail) ?
                                <span className="disabled icon"><IdIcon/></span> :
                                <span className="icon" onClick={internalRemoveMail(mail)}>
                                <CloseIcon/>
                            </span>}

                        </div>)}
                <textarea id="email-field"
                          value={value}
                          onChange={internalOnChange}
                          onBlur={internalAddEmail}
                          onKeyDown={e => {
                              if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                                  internalAddEmail(e);
                                  // @ts-ignore
                                  setTimeout(() => document.getElementById("email-field").focus(), 50);
                                  return stopEvent(e);
                              } else if (e.key === "Backspace" && isEmpty(value) && props.emails.length > 0) {
                                  const mail = props.emails[props.emails.length - 1];
                                  if (!(props.pinnedEmails || []).includes(mail)) {
                                      internalRemoveMail(mail)(null);
                                  }
                              }
                          }}
                          placeholder={props.emails.length === 0 ? props.inviteesPlaceholder : ""} cols={3}/>
            </div>
            {(!isEmpty(emailErrors) && value === "") && <p className="error">
                {`${props.errorMessage} ${Array.from(new Set(emailErrors)).join(", ")}`}
            </p>}
        </div>
    );

};

export default EmailInput;
