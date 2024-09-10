'use client'
import React, { useState } from 'react';
import './page.css';

function Page({ params: { lang } }) {

  const textData = {
    en: {
      register: {
        "title": "Register",
        "des": "Have an account?",
        "redirectbutton": "SIGN IN",
        "fieldname": "Username",
        "fieldphone": "Phone",
        "fieldpass": "Password",
        "submitbutton": "SIGN UP"
      },
      signin: {
        "title": "Sign in",
        "des": "Dont have an account?",
        "redirectbutton": "SIGN UP",
        "fieldname": "Username",
        "fieldpass": "Password",
        "submitbutton": "SIGN IN"
      }
    },
    fa: {
      register: {
        "title": "ثبت نام",
        "des": "حساب دارید؟",
        "redirectbutton": "ورود",
        "fieldname": "نام کاربری",
        "fieldphone": "تلفن",
        "fieldpass": "رمز عبور",
        "submitbutton": "ثبت نام"
      },
      signin: {
        "title": "ورود",
        "des": "حسابی ندارید؟",
        "redirectbutton": "ثبت نام",
        "fieldname": "نام کاربری",
        "fieldpass": "رمز عبور",
        "submitbutton": "ورود"
      }
    }
  }

  const [formMode, setFormMode] = useState('register')

  return (
    <div className='mt-36 flex justify-center py-14'>
      <div className='srm-container srm-active' id="container">
        {
          formMode === 'register' ? (
            <div className="srm-form-container srm-sign-up">
              <form>
                <input type="text" placeholder={lang === "en" ? textData.en.register.fieldname : textData.fa.register.fieldname} />
                <input type="text" placeholder={lang === "en" ? textData.en.register.fieldphone : textData.fa.register.fieldphone} />
                <input type="password" placeholder={lang === "en" ? textData.en.register.fieldpass : textData.fa.register.fieldpass} />
                <button>{lang === "en" ? textData.en.register.submitbutton : textData.fa.register.submitbutton}</button>
              </form>
            </div>
          ) : (
            <div className="srm-form-container srm-sign-in">
              <form>
                <input type="text" placeholder={lang === "en" ? textData.en.signin.fieldname : textData.fa.signin.fieldname} />
                <input type="password" placeholder={lang === "en" ? textData.en.signin.fieldpass : textData.fa.signin.fieldpass} />
                {/* <a href="#">Forget Your Password?</a> */}
                <button>{lang === "en" ? textData.en.signin.submitbutton : textData.fa.signin.submitbutton}</button>
              </form>
            </div>
          )
        }
        <div className="srm-toggle-container">
          <div className="srm-toggle">
            {
              formMode === 'register' ? (
                <div className="srm-toggle-panel srm-toggle-left">
                  <h1>{lang === "en" ? textData.en.register.title : textData.fa.register.title}</h1>
                  <p>{lang === "en" ? textData.en.register.des : textData.fa.register.des}</p>
                  <button className="srm-hiddenT" id="login" onClick={() => setFormMode("signin")}>{lang === "en" ? textData.en.register.redirectbutton : textData.fa.register.redirectbutton}</button>
                </div>
              ) : (
                <div className="srm-toggle-panel toggle-left">
                  <h1>{lang === "en" ? textData.en.signin.title : textData.fa.signin.title}</h1>
                  <p>{lang === "en" ? textData.en.signin.des : textData.fa.signin.des}</p>
                  <button className="srm-hiddenT" id="register" onClick={() => setFormMode("register")}>{lang === "en" ? textData.en.signin.redirectbutton : textData.fa.signin.redirectbutton}</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
