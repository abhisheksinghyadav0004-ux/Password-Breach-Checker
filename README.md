# 🔐 Password Breach Checker

A modern, interactive, and security-focused web application that helps users evaluate password strength, generate secure passwords, and check whether a password has appeared in known data breaches.

Built with HTML, CSS, and JavaScript**, this project combines a cyber-themed interface with practical password security features.

## ✨ Features

- **Password Strength Analyzer** — Evaluates passwords based on length, uppercase letters, numbers, and special characters.
- **Secure Password Generator** — Generates random passwords containing letters, numbers, and symbols.
- **Password Visibility Toggle** — Show or hide the password with a single click.
- **Password Breach Checker** — Checks passwords against the [Have I Been Pwned Pwned Passwords API](https://haveibeenpwned.com/API/v3#PwnedPasswords).
- **One-Click Copy** — Copies the generated or entered password to the clipboard.
- **Matrix-Style Background** — Animated digital-rain effect for a cybersecurity-inspired experience.
- **Glassmorphism UI** — Neon cyan accents, translucent cards, and glowing visual effects.
- **Responsive Layout** — Designed to adapt to different screen sizes.

## 🛠️ Tech Stack

| Technology            | Purpose                                          |
| --------------------- | ------------------------------------------------ |
| HTML5                 | Application structure                            |
| CSS3                  | Styling, animations, and responsive layout       |
| JavaScript            | Password analysis and interactive functionality  |
| Web Crypto API        | SHA-1 hashing for breach lookup                  |
| Have I Been Pwned API | Checks password hashes against known breach data |

## 📸 Application Preview

The interface features a dark cybersecurity theme with a Matrix-inspired animation, password strength meter, password generation controls, breach-checking results, and security tips.

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- Optional: Visual Studio Code Live Server extension

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/abhisheksinghyadav0004-ux/Password-Breach-Checker.git
```

**2. Navigate to the project directory**

```bash
cd Password-Breach-Checker
```

**3. Open the project**

Open `index.html` in your browser, or launch it using the Live Server extension in Visual Studio Code.

No package installation or build process is required for the current vanilla JavaScript implementation.

## 📂 Project Structure

```text
Password-Breach-Checker/
│
├── index.html       # Application structure
├── style.css        # Styling and visual effects
├── script.js        # Password analysis and functionality
└── README.md        # Project documentation
```

## ⚙️ How It Works

### 1. Password Strength Analysis

The application evaluates a password using four basic criteria:

- Minimum length of 8 characters
- At least one uppercase letter
- At least one number
- At least one supported special character

It displays a visual strength indicator based on the number of criteria met.

**Note:** This is a basic educational strength estimator, not a comprehensive password-strength assessment.

### 2. Password Generation

Users can generate a random 12-character password containing uppercase letters, lowercase letters, numbers, and supported symbols.

### 3. Password Breach Detection

The breach checker uses the Pwned Passwords range-search API:

1. The password is hashed locally using SHA-1.
2. Only the first five characters of the hash are sent to the API.
3. The API returns matching hash suffixes and occurrence counts.
4. The application checks whether the remaining hash suffix matches a returned entry.

This uses the API's k-anonymity approach, so the plaintext password is not sent to the breach-checking service.

**Important:** SHA-1 is used here for compatibility with the Pwned Passwords API, not for storing or protecting passwords. A breach lookup also does not guarantee that a password is safe simply because it is not found.

### 4. Clipboard Functionality

The copy button uses the browser Clipboard API to copy the current password. Clipboard permissions and secure-context requirements may vary by browser.

## 🔒 Security Considerations

- Use unique passwords for different accounts.
- Prefer long, randomly generated passwords.
- Store passwords in a reputable password manager.
- Never enter real account passwords into untrusted websites or demonstrations.
- A password strength indicator is guidance, not a guarantee of security.
- The current implementation is a client-side educational project, not a complete password auditing or credential-management system.

## 🧪 Future Enhancements

- [ ] Use cryptographically secure random generation for passwords.
- [ ] Improve password strength estimation with length, common-password checks, and pattern detection.
- [ ] Match breach API hash suffixes exactly and display occurrence counts.
- [ ] Add loading indicators, API error handling, and network failure messages.
- [ ] Improve accessibility and keyboard navigation.
- [ ] Add automated tests and continuous integration.
- [ ] Add a clear privacy notice and stronger input-handling safeguards.

## 🎯 Project Objective

The goal of this project is to demonstrate front-end development skills while exploring practical cybersecurity concepts, including password strength, secure random generation, cryptographic hashing, and breach awareness.

## 👨‍💻 Author

**Abhishek Yadav**

GitHub: [@abhisheksinghyadav0004-ux](https://github.com/abhisheksinghyadav0004-ux)

## 📜 License

This project is open source and available under the MIT License, provided you add an appropriate `LICENSE` file to the repository.

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.
