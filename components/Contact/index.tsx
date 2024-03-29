"use client";

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";

export interface FormProps {
  result: boolean;
  isChecked: boolean;
  callTime: { time: string; isChecked: boolean }[];

  loading: boolean;
}

const Form: React.FC<FormProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const t = useTranslations("Contact");

  async function sendEmail(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      if (!name.trim()) {
        throw new Error("Please provide a valid name.");
      }

      if (!email.trim()) {
        throw new Error("Please provide a valid email address.");
      }

      if (!message.trim()) {
        throw new Error("Please provide a valid message.");
      }

      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }), // Serialize JSON
      });

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error(responseData.error);
      }

      toast.success("Thanks, we will be in touch soon!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section
        key="contact-1"
        id="contact"
        className="overflow-hidden py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  {t("formtitle")}
                </h2>
                <div className="mb-12 text-base font-medium text-body-color">
                  {t("formsubtitle")}
                </div>
                <form onSubmit={sendEmail}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t("name")}
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder={t("subname")}
                          required
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-slate-600 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          value={name}
                          onChange={({ target }: ChangeEvent) =>
                            setName((target as HTMLInputElement).value)
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          {t("email")}
                        </label>
                        <input
                          type="email"
                          placeholder={t("subemail")}
                          name="email"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-slate-600 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          pattern=".+@.+\..+"
                          value={email}
                          onChange={({ target }: ChangeEvent) =>
                            setEmail((target as HTMLInputElement).value)
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label>
                          {t("message")}
                          <span className="">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={6}
                          required
                          value={message}
                          maxLength={1000}
                          placeholder={t("submessage")}
                          className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-slate-800 placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          onChange={({ target }: ChangeEvent) =>
                            setMessage((target as HTMLInputElement).value)
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <input
                        className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        type="submit"
                        value={t("send")}
                      />
                      <div></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Form;
