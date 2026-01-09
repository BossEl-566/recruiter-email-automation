# Recruiter Email Automation

**Recruiter Email Automation** is a Node.js-based tool designed to help students and early-career professionals streamline their job search. It automates personalized email outreach to recruiters in an ethical, platform-compliant manner—offering a safe alternative to restricted LinkedIn bots.

## 🚀 Features

* **Personalized Outreach:** Automatically customize emails with recruiter names, companies, and roles.
* **Secure Networking:** Uses `Nodemailer` for reliable delivery and `dotenv` to protect sensitive credentials.
* **Ethical Automation:** Maintains full control over your contact list without violating platform terms of service.
* **Lightweight & Scalable:** Easy to set up and extend for various industries.

## 🛠️ Technologies Used 

* **Runtime:** Node.js
* **Email Engine:** Nodemailer
* **Security:** Dotenv (Environment Variables)
* **SMTP:** Compatible with Gmail, Outlook, and more.

## 📁 Project Structure

```text
recruiter-email-automation/
├── index.js          # Main logic for email dispatch
├── recruiters.js     # Data file containing recruiter details
├── .env              # Private credentials (ignored by Git)
└── package.json      # Dependencies and scripts

```

## ⚙️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/BossEl-566/recruiter-email-automation.git
cd recruiter-email-automation

```


2. **Install Dependencies**
```bash
npm install

```


3. **Configure Environment Variables**
Create a `.env` file in the root directory and add your credentials:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

```


> **Note:** For Gmail users, it is highly recommended to use an [App Password](https://support.google.com/accounts/answer/185833) rather than your primary password.



## 🚀 Usage

1. Update `recruiters.js` with your target contact list.
2. Run the automation script:
```bash
node index.js

```



## 🎓 Use Case

This project is ideal for Computer Science students and job seekers who want to scale their networking efforts while maintaining a high level of personalization and professional standards.

---

**Author:** [Elliot Datsomor](https://github.com/BossEl-566)

*Computer Science Student*

---
