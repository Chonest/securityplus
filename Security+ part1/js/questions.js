// Debugging: Ensure questions.js loaded successfully!
console.log("✅ questions.js loaded successfully!");

// Creating an array of questions with multiple-choice answers
let questions = [
    {
        numb: 1,
        question: "You are conducting a physical security audit of a small business that displays clear signage about surveillance and security measures in its facility to warn potential intruders. What type of control is being employed?",
        answer: "Deterrent control",
        options: [
            "Detective control",
            "Compensating control",
            "Deterrent control",
            "Preventive control"
        ]
    },
    {
        numb: 2,
        question: "A software development company is implementing a new change management process. Before any changes are made to the system, the changes must be approved by a senior engineer and documented to prevent unauthorized modifications. What is the primary purpose of this approval process?",
        answer: "To prevent unauthorized system changes",
        options: [
            "To speed up the deployment process",
            "To streamline software development",
            "To enhance system functionality",
            "To prevent unauthorized system changes"
        ]
    },
    {
        numb: 3,
        question: "A retail company implements a new policy requiring all employees to undergo security awareness training annually. What type of control does this new policy exemplify?",
        answer: "Directive control",
        options: [
            "Operational control",
            "Technical control",
            "Directive control",
            "Managerial control"
        ]
    },
    {
        numb: 4,
        question: "A data center installs biometric access controls at all entry points to mitigate the risk of unauthorized physical access. What type of control is this?",
        answer: "Physical control",
        options: [
            "Operational control",
            "Technical control",
            "Physical control",
            "Deterrent control"
        ]
    },
    {
        numb: 5,
        question: "A clothing manufacturer’s corporate office implements a new policy specifically directing that any changes made to IT systems must include a process to return the system back to a known-good state if something goes wrong. Which of the following best describes the purpose of this new policy?",
        answer: "Backout plan",
        options: [
            "Maintenance window",
            "Performance baseline",
            "Standard operating procedure",
            "Backout plan"
        ]
    },
    {
        numb: 6,
        question: "A software company revises its development process to include a step in which any new code must be reviewed and approved by a senior developer. Which of the following best describes this step that is specifically designed to catch potential security flaws?",
        answer: "Approval process",
        options: [
            "Approval process",
            "Stakeholder engagement",
            "Ownership",
            "Maintenance window"
        ]
    },
    {
        numb: 7,
        question: "A healthcare provider implements a new system that encrypts patient data at rest and in transit, ensuring that unauthorized parties cannot decipher the information if they intercept it. Which of the following best describes the aspect of the CIA triad the healthcare provider is primarily focusing on?",
        answer: "Confidentiality",
        options: [
            "Confidentiality",
            "Integrity",
            "Accountability",
            "Availability"
        ]
    },
    {
        numb: 8,
        question: "A company’s IT team implements a system to track changes to their software over time, allowing them to see what changes were made, by whom, and when and potentially revert to specific versions later. What is this system commonly known as?",
        answer: "Version control",
        options: [
            "Version control",
            "Change log",
            "Audit trail",
            "Configuration record"
        ]
    },
    {
        numb: 9,
        question: "The IT security team for a large bank responds to unauthorized access attempts to the backend systems by strengthening the firewall rules and implementing stricter network access controls. What category of control are these enhancements?",
        answer: "Preventive control",
        options: [
            "Corrective control",
            "Compensating control",
            "Preventive control",
            "Detective control"
        ]
    },
    {
        numb: 10,
        question: "Your program manager approaches you and asks for help updating network infrastructure diagrams after a major update. Which of the following best describes this process?",
        answer: "Updating diagrams",
        options: [
            "System description",
            "Configuration management",
            "Documentation maintenance",
            "Updating diagrams"
        ]
    },
    {
        numb: 11,
        question: "An IT security team is implementing additional measures to detect unauthorized access in their network. They plan to use a honeytoken. What is the primary purpose of introducing a honeytoken in their security strategy?",
        answer: "To act as a decoy to detect unauthorized system access",
        options: [
            "To provide a legitimate backup for user data",
            "To serve as a primary authentication method for users",
            "To enhance the speed of the network’s data processing",
            "To act as a decoy to detect unauthorized system access"
        ]
    },
    {
        numb: 12,
        question: "Your supervisor asks you to coordinate a companywide review to identify discrepancies between its current cybersecurity practices and the industry’s best standards. This process is known as what?",
        answer: "Gap analysis",
        options: [
            "Compliance audit",
            "Gap analysis",
            "Vulnerability scanning",
            "Risk assessment"
        ]
    },
    {
        numb: 13,
        question: "Your company adopts the Zero Trust security model, requiring continuous verification of all users and devices, regardless of location. Which principle is this security model based on?",
        answer: "Adaptive identity",
        options: [
            "Defense in depth",
            "Least privilege",
            "Adaptive identity",
            "Secure by design"
        ]
    },
    {
        numb: 14,
        question: "A global corporation with employees working remotely across different time zones decides to implement a policy where access to sensitive systems is granted based on the user’s role, time of access, and location. Which aspect of security does this approach primarily enhance?",
        answer: "Policy-driven access control",
        options: [
            "Digital signatures",
            "Data encryption",
            "Policy-driven access control",
            "Security tokenization"
        ]
    },
    {
        numb: 15,
        question: "An organization introduces additional logging and monitoring to compensate for its inability to segregate network and system administration duties. What type of control does this represent?",
        answer: "Compensating control",
        options: [
            "Compensating control",
            "Preventive control",
            "Corrective control",
            "Detective control"
        ]
    },
    {
        numb: 16,
        question: "A tech company regularly updates just its network diagrams to reflect recent changes in its IT infrastructure, which is crucial for maintaining an accurate understanding of the network’s current state. What is this practice known as?",
        answer: "Configuration management",
        options: [
            "System analysis",
            "Configuration management",
            "Updating diagrams",
            "Network optimization"
        ]
    },
    {
        numb: 16,
        question: "A tech company regularly updates just its network diagrams to reflect recent changes in its IT infrastructure, which is crucial for maintaining an accurate understanding of the network’s current state. What is this practice known as?",
        answer: "Configuration management",
        options: [
            "System analysis",
            "Configuration management",
            "Updating diagrams",
            "Network optimization"
        ]
    },
    {
        numb: 17,
        question: "Following recent cyberattacks, your company is undertaking a process to strengthen its defenses by aligning with the latest security standards and best practices. Which process does this describe?",
        answer: "Updating policies and procedures",
        options: [
            "Updating policies and procedures",
            "Change management",
            "Version control",
            "Physical security update"
        ]
    },
    {
        numb: 18,
        question: "An organization updates its access control systems to include biometric verification, enhancing the process of verifying individuals’ identities. Implementing biometric verification is an example of which aspect of the AAA framework?",
        answer: "Authentication",
        options: [
            "Non-repudiation",
            "Authorization",
            "Accounting",
            "Authentication"
        ]
    },
    {
        numb: 19,
        question: "You work for a Fortune 100 company that installed an intrusion detection system (IDS) that alerts the security team of unusual network traffic patterns. What type of control does this system primarily function as?",
        answer: "Detective control",
        options: [
            "Detective control",
            "Deterrent control",
            "Corrective control",
            "Preventive control"
        ]
    },
    {
        numb: 20,
        question: "In an IT environment, you are likely to work with older software programs that are still crucial for operations. What is the term used to describe these older software programs?",
        answer: "Legacy applications",
        options: [
            "Advanced systems",
            "Legacy applications",
            "Recent developments",
            "Modern software"
        ]
    },
    {
        numb: 21,
        question: "Your company sets up a network of simulated vulnerable systems in an effort to trap and study potential attackers. What type of setup does this best describe?",
        answer: "Honeynet",
        options: [
            "Intrusion detection system",
            "Virtual private network",
            "Firewall",
            "Honeynet"
        ]
    },
    {
        numb: 22,
        question: "You work in the IT department of a large international organization and are tasked with upgrading the authentication system to secure employee access to the company’s internal network better. Considering the increasing number of remote workers using various devices, which authentication model should you prioritize to enhance security without significantly impacting user convenience?",
        answer: "Utilizing multifactor authentication (MFA) for all employee access",
        options: [
            "Applying risk-based authentication (RBA) to adapt security based on user behavior",
            "Utilizing multifactor authentication (MFA) for all employee access",
            "Implementing single-factor authentication (SFA) for its simplicity",
            "Adopting two-factor authentication (2FA) for essential services only"
        ]
    },
    {
        numb: 23,
        question: "In a financial organization, the IT team is assigned specific computers, servers, and network equipment to manage. They are responsible for defining the security requirements and managing the risk profile of this equipment. Which of the following best describes this scenario?",
        answer: "Ownership",
        options: [
            "Documentation process",
            "Technical implications",
            "Stakeholder engagement",
            "Ownership"
        ]
    },
    {
        numb: 24,
        question: "A security manager at a software company is revising the SDLC process to include risk management strategies and compliance with legal requirements. Which category of controls is the manager focusing on?",
        answer: "Managerial controls",
        options: [
            "Operational controls",
            "Corrective controls",
            "Managerial controls",
            "Technical controls"
        ]
    },
    {
        numb: 25,
        question: "When managing IT systems in a company, what challenge is often associated with legacy applications?",
        answer: "Compatibility issues",
        options: [
            "Compatibility issues",
            "Frequent updates and enhancements",
            "Low operational costs",
            "Easy integration with new technologies"
        ]
    },
    {
        numb: 26,
        question: "A company is planning to introduce a new software update. Before deployment, the security team analyzes the update to assess any potential undesirable changes to the organization’s security. Which of the following best describes this process?",
        answer: "Impact analysis",
        options: [
            "Compliance audit",
            "Risk assessment",
            "Impact analysis",
            "Vulnerability scanning"
        ]
    },
    {
        numb: 27,
        question: "A retail company plans to upgrade its point-of-sale systems. Before implementing the upgrade, the IT team conducts an analysis to assess how the upgrade might affect the existing network and security setup. What is this analysis called?",
        answer: "Impact analysis",
        options: [
            "Vulnerability scanning",
            "Risk assessment",
            "Impact analysis",
            "Compliance audit"
        ]
    },
    {
        numb: 28,
        question: "In a high-security facility, guards are stationed at every entrance, and all visitors are logged and surveilled) Which type of control is primarily being utilized here?",
        answer: "Physical control",
        options: [
            "Physical control",
            "Software patch management",
            "Data encryption",
            "Network security"
        ]
    },
    {
        numb: 29,
        question: "The IT department of a hospital is implementing RAID 5 arrays to ensure data availability and fault tolerance. What category of controls does this implementation represent?",
        answer: "Technical controls",
        options: [
            "Compensating controls",
            "Managerial controls",
            "Operational controls",
            "Technical controls"
        ]
    },
    {
        numb: 30,
        question: "Your company’s head of security is concerned that unauthorized vehicles are blocking access to the front doors of the building. In response to these concerns, your company enhances its facility’s security by installing bollards to prevent unauthorized vehicle access. Which category of security does this measure fall under?",
        answer: "Physical security",
        options: [
            "Physical security",
            "Network security",
            "Digital security",
            "Operational security"
        ]
    },
    {
        numb: 31,
        question: "You were at a small regional bank that recently began receiving fraudulent claims that money was not correctly transferred to a designated bank account. Your institution implements a system ensuring that the authorship of a transaction cannot be denied or disputed once made. This measure primarily addresses which fundamental security concept?",
        answer: "Non-repudiation",
        options: [
            "Confidentiality",
            "Integrity",
            "Non-repudiation",
            "Availability"
        ]
    },
    {
        numb: 32,
        question: "A company employs offsite data backups and redundancy systems to ensure business continuity during a disaster. What type of control does this represent?",
        answer: "Corrective control",
        options: [
            "Corrective control",
            "Compensating control",
            "Detective control",
            "Preventive control"
        ]
    },{
        numb: 33,
        question: "A multinational corporation’s website is defaced with political messages protesting the corporation’s environmental policies and its services are disrupted by a DDoS attack. What type of threat actor is likely behind these activities?",
        answer: "Environmental activist group",
        options: [
            "Environmental activist group",
            "Organized cybercriminal group",
            "Disgruntled former employee",
            "Nation-state actor"
        ]
    },
    {
        numb: 34,
        question: "A financial institution faces repeated attempts to infiltrate its network. The attacks are traced back to a group seeking to disrupt financial markets for political reasons. Their tactics include sophisticated cyberattacks and public disinformation campaigns. What type of threat actor is attempting to infiltrate the financial institution?",
        answer: "Political activist group",
        options: [
            "Nation-state actor",
            "Political activist group",
            "Organized crime syndicate",
            "Insider threat"
        ]
    },
    {
        numb: 35,
        question: "A popular online forum frequently visited by employees of a cybersecurity team was compromised and later found to be hosting malware. What type of attack is described in this scenario?",
        answer: "Watering hole attack",
        options: [
            "Pretexting",
            "Typosquatting",
            "Watering hole attack",
            "Phishing"
        ]
    },
    {
        numb: 36,
        question: "An IT security team is assessing the company’s cybersecurity measures and focusing on identifying weaknesses in its software systems. They need to choose an approach to address these vulnerabilities. What should they understand about the difference between client-based and agentless security solutions in this context?",
        answer: "The contrast in addressing software vulnerabilities",
        options: [
            "The contrast in addressing software vulnerabilities",
            "The impact on network bandwidth",
            "The cost implications of implementation",
            "The aesthetic differences in user interfaces"
        ]
    },
    {
        numb: 37,
        question: "The cybersecurity team of an online media company is addressing potential threats to the company’s digital content. They are particularly concerned about the risk of image-based threats. Which of the following best describes the cybersecurity team’s main concern?",
        answer: "Malicious manipulation or exploitation of digital images",
        options: [
            "The color scheme used in the images",
            "Malicious manipulation or exploitation of digital images",
            "The storage requirements for large image files",
            "The resolution and size of the digital images"
        ]
    },
    {
        numb: 38,
        question: "An attacker registers a domain that is a common typo of a multinational company’s official website and uses it to distribute malware. Which attack method is the attacker leveraging?",
        answer: "Typosquatting",
        options: [
            "Typosquatting",
            "Watering hole attack",
            "Phishing",
            "Brand impersonation"
        ]
    },
    {
        numb: 39,
        question: "A security analyst is explaining the differences between symmetric and asymmetric encryption to new staff. Which of the following statements correctly distinguishes symmetric encryption?",
        answer: "Employs the same key for both encryption and decryption",
        options: [
            "Typically slower than asymmetric encryption",
            "Employs the same key for both encryption and decryption",
            "Primarily used for creating digital signatures",
            "Uses a pair of keys for encryption and decryption"
        ]
    },
    {
        numb: 40,
        question: "A major software company finds its proprietary software freely distributed on hacker forums. Investigation reveals that the leak originated from a government-sponsored group to undermine the company’s market dominance. What type of threat actor is likely behind the software leak?",
        answer: "Nation-state actor",
        options: [
            "Cybercriminal",
            "Corporate espionage agent",
            "Organized crime group",
            "Nation-state actor"
        ]
    },
    {
        numb: 41,
        question: "A retail company is looking to protect its customers’ credit card information more effectively in its database. The company needs a method that transforms this sensitive data into a secure format. Which process should the company implement?",
        answer: "Implementing data tokenization",
        options: [
            "Upgrading the user interface of the database",
            "Enhancing database query speed",
            "Increasing the storage capacity of the database",
            "Implementing data tokenization"
        ]
    },
    {
        numb: 42,
        question: "During a security audit, it was found that a department’s files are encrypted at the file level rather than using full-disk encryption. Considering the need for comprehensive security, what is the primary advantage of switching to full-disk encryption in this scenario?",
        answer: "Encrypts the entire hard drive, including all files and the operating system",
        options: [
            "Easier key management",
            "Encrypts only the operating system files",
            "Faster encryption and decryption",
            "Encrypts the entire hard drive, including all files and the operating system"
        ]
    },
    {
        numb: 43,
        question: "A network administrator is setting up a new server and must choose an appropriate encryption method) The server will handle a large volume of transactions and requires efficient processing. Why might the administrator choose symmetric encryption over other methods?",
        answer: "It is faster and less complex than asymmetric encryption.",
        options: [
            "It is faster and less complex than asymmetric encryption.",
            "It is more suitable for digital signatures.",
            "It offers stronger encryption than asymmetric methods.",
            "It uses public and private keys for added security."
        ]
    },
    {
        numb: 44,
        question: "A healthcare provider experiences a cyberattack that encrypts patient data and holds it for ransom. The attackers demand a large sum of money for the decryption key. Which of the following threat actors likely has the motivation and resources to execute this type of attack?",
        answer: "Organized crime",
        options: [
            "Unskilled attacker",
            "Insider threat",
            "Organized crime",
            "Hacktivist"
        ]
    },
    {
        numb: 45,
        question: "A network engineer is tasked with enhancing the security of a company’s data transmission. The engineer needs to choose a set of algorithms that will be part of the TLS cipher suite to secure the network. Which aspect should they focus on when selecting these algorithms?",
        answer: "Security of network connections",
        options: [
            "Security of network connections",
            "User interface improvements",
            "Cost-effectiveness of implementation",
            "Speed of data transmission"
        ]
    },
    {
        numb: 46,
        question: "A government organization notices a pattern of sophisticated cyberattacks targeting its defense secrets. These attacks are well coordinated, continuous, and exhibit high levels of skill and resource backing. What type of threat actor does this pattern suggest?",
        answer: "Advanced persistent threat (APT)",
        options: [
            "Advanced persistent threat (APT)",
            "Organized crime group",
            "Disgruntled employee",
            "Unskilled attacker"
        ]
    },
    {
        numb: 47,
        question: "A manufacturing company falls victim to a data breach after an employee opens a malware-laden email attachment disguised as an invoice from a known vendor. Which type of threat does this scenario best illustrate?",
        answer: "File-based threat",
        options: [
            "Spear-phishing",
            "Vishing",
            "File-based threat",
            "Spam"
        ]
    },
    {
        numb: 48,
        question: "A company’s IT security team is considering implementing key escrow as part of its public key infrastructure (PKI) system. Which of the following best describes the primary reason for this consideration?",
        answer: "To ensure key recovery in case of loss",
        options: [
            "To ensure secure email transmission",
            "To enhance encryption strength",
            "To ensure key recovery in case of loss",
            "To centralize key generation"
        ]
    },
    {
        numb: 49,
        question: "During a routine audit at an international bank, a pattern of unauthorized financial transactions is traced back to an employee. The employee had secretly manipulated account balances and transferred small amounts to a personal account over several months. What type of threat actor best describes the employee?",
        answer: "Insider threat",
        options: [
            "Hacktivist",
            "Cybercriminal",
            "Insider threat",
            "Unskilled attacker"
        ]
    },
    {
        numb: 50,
        question: "An employee at a healthcare organization receives an email that appears to be from the IT department, alerting the employee of a security issue and requesting their immediate response by clicking a link. The employee later discovers that the IT department did not send this email. This is an example of which type of cybersecurity threat?",
        answer: "Phishing",
        options: [
            "Vishing",
            "Spam",
            "Phishing",
            "Smishing"
        ]
    },
    {
        numb: 51,
        question: "An employee at a government agency receives an SMS message asking to confirm login credentials due to a supposed security breach. It later turns out that the IT department never sent such a message. What type of social engineering attack happened to the employee?",
        answer: "Smishing",
        options: [
            "Smishing",
            "Phishing",
            "Spear-phishing",
            "Vishing"
        ]
    },
    {
        numb: 52,
        question: "An IT manager must choose between symmetric and asymmetric encryption for protecting corporate data) The primary concern is the speed of encryption and decryption due to large data volumes. Which encryption method would best serve the IT manager’s needs?",
        answer: "Symmetric encryption",
        options: [
            "Asymmetric encryption",
            "Symmetric encryption",
            "Hashing",
            "Digital signatures"
        ]
    },
    {
        numb: 53,
        question: "An IT manager is deciding between full-disk and file-level encryption to protect company data) What key advantage does full-disk encryption provide in this scenario?",
        answer: "Encrypts the entire hard drive, including the operating system",
        options: [
            "Faster encryption and decryption processes",
            "Encrypts only sensitive files",
            "Encrypts the entire hard drive, including the operating system",
            "Easier key management"
        ]
    },
    {
        numb: 54,
        question: "A company’s network is breached through a vulnerability in a third-party application used for business operations. This breach demonstrates failure to address which aspect of cybersecurity?",
        answer: "Supply chain risk",
        options: [
            "Supply chain risk",
            "Default credentials",
            "Unsupported systems",
            "Open service ports"
        ]
    },
    {
        numb: 55,
        question: "A corporate executive discovers that a rival company is now using the corporation’s confidential product designs. Further investigation reveals that the designs were sold to the rival by a disgruntled employee seeking revenge for a recent demotion. Which type of threat actor most likely facilitated the sale of confidential designs?",
        answer: "Insider threat",
        options: [
            "Cybercriminal",
            "Insider threat",
            "Competitor espionage",
            "Organized crime"
        ]
    },
    {
        numb: 56,
        question: "A software development company discovers that the source code of its new product has been leaked) The subsequent investigation reveals that the leak originated from an employee who acted out of frustration over workplace issues. Which of the following best represents this type of threat?",
        answer: "Insider threat",
        options: [
            "Competitor espionage",
            "Hacktivist",
            "Cybercriminal",
            "Insider threat"
        ]
    },
    {
        numb: 57,
        question: "In a corporate environment, an IT administrator notices an unusually high network bandwidth consumption, which, upon investigation, is traced to a distributed denial-of-service (DDoS) attack. Overwhelming a system with traffic is typically classified under which category of cybersecurity threats?",
        answer: "Network attack",
        options: [
            "Application attack",
            "Physical attack",
            "Network attack",
            "Social engineering"
        ]
    },
    {
        numb: 58,
        question: "A financial institution faces repeated security challenges due to its continued use of outdated encryption algorithms, making its data transmissions vulnerable to interception. What type of vulnerability does this situation represent?",
        answer: "Cryptographic vulnerability",
        options: [
            "SQL injection",
            "Firmware vulnerability",
            "Cryptographic vulnerability",
            "Misconfiguration"
        ]
    },
    {
        numb: 59,
        question: "Attackers manipulate the timing of transactions to withdraw funds in an online banking application without detection. What is the term for this type of vulnerability related to the timing in software systems?",
        answer: "Race condition",
        options: [
            "Race condition",
            "SQL injection",
            "Malicious update",
            "Buffer overflow"
        ]
    },
    {
        numb: 60,
        question: "A company discovers that its network has been compromised through a vulnerability in its firewall software. Attackers exploited this previously unknown vulnerability before the firewall vendor had the opportunity to release a patch. Which of the following terms best describes this vulnerability?",
        answer: "Zero-day",
        options: [
            "Zero-day",
            "SQL injection",
            "Misconfiguration",
            "Firmware vulnerability"
        ]
    },
    {
        numb: 61,
        question: "An organization discovers that its database server has been compromised through a SQL injection attack, allowing unauthorized access to confidential data) What broader category of cybersecurity threats is this type of attack categorized under?",
        answer: "Application attacks",
        options: [
            "Physical attacks",
            "Application attacks",
            "Network attacks",
            "Cryptographic attacks"
        ]
    },
    {
        numb: 62,
        question: "A software company learns that its recently discontinued product is still being used by many clients, leaving them vulnerable to unpatched security flaws. This situation exemplifies what type of vulnerability?",
        answer: "Legacy system",
        options: [
            "End-of-life hardware",
            "Network router",
            "Firmware vulnerability",
            "Legacy system"
        ]
    },
    {
        numb: 63,
        question: "A company identifies a flaw in its web application that allows attackers to inject malicious scripts into web forms, which are then executed by other users’ browsers. This vulnerability allows attackers to steal user data and session information. What type of web-based vulnerability is this?",
        answer: "Cross-site scripting (XSS)",
        options: [
            "Malicious update",
            "SQL injection",
            "Buffer overflow",
            "Cross-site scripting (XSS)"
        ]
    },
    {
        numb: 64,
        question: "Which of the following best describes intercepting and potentially altering communications in an email server?",
        answer: "On-path attack",
        options: [
            "On-path attack",
            "DNS poisoning",
            "Replay attack",
            "Phishing"
        ]
    },
    {
        numb: 65,
        question: "A cybersecurity team in a company identifies a series of unauthorized wireless access points in the company’s network. After reviewing the network logs, they discover that these access points are being used to intercept and monitor the company’s wireless communications. What type of security threat do these wireless access points represent?",
        answer: "Rogue access points",
        options: [
            "Wi-Fi jamming",
            "Packet sniffing",
            "Rogue access points",
            "Evil twin attack"
        ]
    },
    {
        numb: 66,
        question: "A company experiences a security breach in which intruders gain unauthorized physical access to the company data center, damaging servers and vandalizing several computers. What category of threat does this incident fall under?",
        answer: "Physical attacks",
        options: [
            "Social engineering",
            "Phishing",
            "Malware infection",
            "Physical attacks"
        ]
    },
    {
        numb: 67,
        question: "A web application at a tech company is compromised, allowing attackers to execute unauthorized SQL queries through user input fields. What is the name of this vulnerability that allows the manipulation of database queries?",
        answer: "SQL injection",
        options: [
            "Cross-site scripting",
            "Buffer overflow",
            "SQL injection",
            "Firmware vulnerability"
        ]
    },
    {
        numb: 68,
        question: "A financial institution faces a series of attacks in which the attackers impersonate legitimate users by capturing and reusing their authentication tokens. Which type of security vulnerability does this attack method exploit?",
        answer: "Replay attack",
        options: [
            "Replay attack",
            "On-path attack",
            "Session hijacking",
            "Credential stuffing"
        ]
    },
    {
        numb: 69,
        question: "An IT security manager discovers that confidential company information is being leaked) Upon investigation, the manager finds a small device connected between the keyboard and computer of a high-level executive. What type of cybersecurity threat does this device represent?",
        answer: "Keylogger",
        options: [
            "Keylogger",
            "Ransomware",
            "Rootkit",
            "Network sniffer"
        ]
    },
    {
        numb: 70,
        question: "A software development company discovers its critical application has been compromised through a security flaw that allows attackers to introduce malicious code into the application’s memory. What type of application vulnerability does this represent?",
        answer: "Memory injection",
        options: [
            "Memory injection",
            "Buffer overflow",
            "Race condition",
            "Firmware vulnerability"
        ]
    },
    {
        numb: 71,
        question: "A critical application starts behaving erratically in a software development firm. Further investigation reveals malicious code injected into the application’s memory, altering its functionality. Which of the following best describes when malicious code exploits the application’s memory?",
        answer: "Memory injection",
        options: [
            "Memory injection",
            "Buffer overflow",
            "Malicious update",
            "Race condition"
        ]
    },
    {
        numb: 72,
        question: "In a data center, a security team discovers that an attacker has exploited a vulnerability, allowing them to break out of a virtual machine (VM) and access the host system. This breach exposes other VMs on the same host to risk. Which of the following best describes this type of vulnerability?",
        answer: "VM escape",
        options: [
            "Malicious update",
            "Firmware vulnerability",
            "Resource reuse",
            "VM escape"
        ]
    },
    {
        numb: 73,
        question: "An attacker tricks a user into clicking a link that silently performs actions on a banking website where the user is already authenticated, such as initiating a money transfer. What type of web-based attack is this?",
        answer: "Cross-site request forgery (CSRF)",
        options: [
            "Cross-site request forgery (CSRF)",
            "Directory traversal",
            "Cross-site scripting (XSS)",
            "SQL injection"
        ]
    },
    {
        numb: 74,
        question: "An IT security analyst at a technology firm observes a sudden surge in failed login attempts from multiple foreign IP addresses, followed by a rapid depletion of system resources. This pattern of behavior is indicative of what type of cybersecurity threat?",
        answer: "Distributed denial-of-service (DDoS) attack",
        options: [
            "Brute-force attack",
            "Credential stuffing",
            "Distributed denial-of-service (DDoS) attack",
            "Phishing"
        ]
    },
    {
        numb: 75,
        question: "A financial organization detects an unusual pattern of failed login attempts on its network, resulting in several account lockouts. This pattern suggests the potential use of what type of attack?",
        answer: "Password spraying",
        options: [
            "Brute force",
            "Credential replay",
            "Password spraying",
            "Phishing"
        ]
    },
    {
        numb: 76,
        question: "A multinational corporation discovers counterfeit components in its hardware purchases, potentially compromising network security. What is the term for this vulnerability?",
        answer: "Hardware vulnerability",
        options: [
            "Legacy system",
            "Firmware vulnerability",
            "Hardware vulnerability",
            "End-of-life hardware"
        ]
    },
    {
        numb: 77,
        question: "A company’s website is compromised through a vulnerability that allows attackers to alter the website’s appearance and function by injecting malicious scripts. Which of the following best describes manipulating a website to execute unintended actions?",
        answer: "Cross-site scripting (XSS)",
        options: [
            "Directory traversal",
            "SQL injection",
            "Cross-site request forgery (CSRF)",
            "Cross-site scripting (XSS)"
        ]
    },
    {
        numb: 78,
        question: "A company experiences a security incident where attackers use a list of previously breached usernames and passwords from another service to gain unauthorized access to employee accounts. What type of attack does this scenario illustrate?",
        answer: "Credential stuffing",
        options: [
            "Password spraying",
            "Brute force",
            "Dictionary attack",
            "Credential stuffing"
        ]
    },
    {
        numb: 79,
        question: "A mobile device user bypasses manufacturer restrictions to gain full control over the device’s operating system and install unauthorized applications. This action exposes the device to increased security risks. What is this practice known as?",
        answer: "Jailbreaking",
        options: [
            "Firmware tampering",
            "Zero-day exploitation",
            "Side loading",
            "Jailbreaking"
        ]
    },
    {
        numb: 80,
        question: "An attacker exploits a flaw in a software update mechanism to inject unauthorized code into a system during the update process. This leads to unauthorized access and system compromise. What type of vulnerability does this represent?",
        answer: "Malicious update",
        options: [
            "Memory injection",
            "Jailbreaking",
            "Zero-day",
            "Malicious update"
        ]
    },
    {
        numb: 81,
        question: "A large retail company’s website crashes repeatedly, and analysis shows that excessive data is being sent to the website’s input fields, causing the server to overload) Which of the following best describes this scenario?",
        answer: "Buffer overflow",
        options: [
            "Cross-site scripting",
            "Race condition",
            "Buffer overflow",
            "SQL injection"
        ]
    },
    {
        numb: 82,
        question: "An organization discovers that several user accounts have been compromised by using common passwords. The logs show the attackers tried these common passwords against numerous accounts, leading to unauthorized access. What type of attack was used to access these accounts?",
        answer: "Password spraying",
        options: [
            "Password spraying",
            "Dictionary attack",
            "Brute force",
            "Credential stuffing"
        ]
    },
    {
        numb: 83,
        question: "A company’s web development team fails to validate user input on a new online form. An attacker uses this oversight to insert malicious scripts that are later executed in other users’ browsers. What type of vulnerability is being exploited?",
        answer: "Cross-site scripting (XSS)",
        options: [
            "Buffer overflow",
            "Cross-site scripting (XSS)",
            "SQL injection",
            "Race condition"
        ]
    },
    {
        numb: 84,
        question: "A retail company’s network is targeted with an attack that floods its servers with excessive traffic, making the network services unavailable to legitimate users. Which of the following terms best describes overwhelming a network to disrupt services?",
        answer: "Distributed denial-of-service (DDoS)",
        options: [
            "On-path attack",
            "Buffer overflow",
            "Distributed denial-of-service (DDoS)",
            "Amplified DDoS"
        ]
    },
    {
        numb: 85,
        question: "An organization wants to implement a server that acts as an intermediary, handling client requests to the Internet while also providing anonymity through NAT. What type of proxy server is best suited for this purpose?",
        answer: "IP proxy",
        options: [
            "IP proxy",
            "FTP proxy",
            "SMTP proxy",
            "Caching proxy"
        ]
    },
    {
        numb: 86,
        question: "A healthcare provider implements a system that isolates any device infected with malware to prevent the spread of the infection within the network. Which of the following best describes containing a threat in this way?",
        answer: "Isolation",
        options: [
            "Quarantine",
            "Patch management",
            "Isolation",
            "Network segmentation"
        ]
    },
    {
        numb: 87,
        question: "A company is implementing a new network and is concerned about unauthorized devices connecting to its network ports. Which technology should the company use to prevent this?",
        answer: "802.1X",
        options: [
            "802.1X",
            "Intrusion prevention system (IPS)",
            "Web application firewall (WAF)",
            "Virtual private network (VPN)"
        ]
    },
    {
        numb: 88,
        question: "An organization applies a hardening technique to all its workstations that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Which type of hardening technique is this?",
        answer: "Host-based firewall",
        options: [
            "Default password changes",
            "Host-based firewall",
            "Installation of endpoint protection",
            "Disabling ports/protocols"
        ]
    },
    {
        numb: 89,
        question: "A corporation enforces strict guidelines on network configurations to enhance their security posture, ensuring that all devices comply with the company’s security standards. Which of the following terms best describes the corporation’s approach to network configuration security?",
        answer: "Configuration enforcement",
        options: [
            "Access control",
            "Hardening techniques",
            "Monitoring",
            "Configuration enforcement"
        ]
    },
    {
        numb: 90,
        question: "After experiencing a security breach, a corporation updates its policy to mandate regular updates and patches for all its software systems. This measure is an example of what kind of mitigation technique?",
        answer: "Patching",
        options: [
            "Configuration enforcement",
            "Isolation",
            "Patching",
            "Encryption"
        ]
    },
    {
        numb: 91,
        question: "A company wants to improve its network security by monitoring network traffic for signs of malicious activities and automatically intervening to mitigate threats. Which combination of systems should be implemented?",
        answer: "Intrusion detection system (IDS) and intrusion prevention system (IPS)",
        options: [
            "Web application firewall (WAF) and packet filtering firewall",
            "Intrusion detection system (IDS) and intrusion prevention system (IPS)",
            "VPN and 802.1X authentication",
            "Unified threat management (UTM) and next-generation firewall (NGFW)"
        ]
    },
    {
        numb: 92,
        question: "A corporation enforces strict configuration settings on all its network devices to ensure they comply with the company’s security standards. Which of the following terms best defines this approach to maintaining consistent security configurations across all devices?",
        answer: "Configuration enforcement",
        options: [
            "Decommissioning",
            "Configuration enforcement",
            "Hardening techniques",
            "Monitoring"
        ]
    },
    {
        numb: 93,
        question: "An organization aims to enhance its network security by implementing a system that can inspect and filter HTTP/HTTPS traffic to protect against web-based attacks. Which solution should the organization deploy?",
        answer: "Web application firewall (WAF)",
        options: [
            "Packet filtering firewall",
            "Stateful inspection firewall",
            "Web application firewall (WAF)",
            "Network-based intrusion prevention system (NIPS)"
        ]
    },
    {
        numb: 94,
        question: "A company’s IT department discovers that an outdated server, no longer in use, was left connected to the network and has become a security vulnerability. This scenario highlights the importance of what security practice?",
        answer: "Decommissioning",
        options: [
            "Monitoring",
            "Decommissioning",
            "Hardening techniques",
            "Patching"
        ]
    },
    {
        numb: 95,
        question: "A data center implements a system in which two devices run the same software and share the workload simultaneously for efficient load balancing and failover. What is this type of system implementation known as?",
        answer: "Active/active",
        options: [
            "Passive/active",
            "Passive/passive",
            "Active/passive",
            "Active/active"
        ]
    },
    {
        numb: 96,
        question: "A company is concerned about the security of its web applications and is evaluating options to enhance protection against SQL injection and cross-site scripting attacks. Which type of firewall would be most effective for this purpose?",
        answer: "Web application firewall (WAF)",
        options: [
            "Web application firewall (WAF)",
            "Network-based firewall",
            "Stateful inspection firewall",
            "Packet filtering firewall"
        ]
    },
    {
        numb: 97,
        question: "An enterprise adopts a policy of regularly reviewing and removing from its systems any software that is no longer necessary for business operations. Which of the following terms best describes the action taken by the organization to reduce potential vulnerabilities?",
        answer: "Removal of unnecessary software",
        options: [
            "Removal of unnecessary software",
            "Configuration enforcement",
            "Decommissioning",
            "Patch management"
        ]
    },
    {
        numb: 98,
        question: "A technology company implements a new policy to regularly update all software applications to the latest versions and apply security patches as soon as they are released) Which of the following is an example of this kind of policy practice?",
        answer: "Patch management",
        options: [
            "Configuration management",
            "Patch management",
            "Encryption",
            "User training"
        ]
    },
    {
        numb: 99,
        question: "A company is looking to deploy a solution that can manage the distribution of network traffic among several servers to optimize performance and reliability. What technology should the company implement?",
        answer: "Load balancer",
        options: [
            "Intrusion detection system (IDS)",
            "Load balancer",
            "Next-generation firewall (NGFW)",
            "Unified threat management (UTM)"
        ]
    },
    {
        numb: 100,
        question: "A company deploys a solution that separates its public-facing services from its internal network using firewalls and controlled communication pathways. This setup is primarily an example of what security strategy?",
        answer: "Network segmentation",
        options: [
            "Patch management",
            "Password rotation",
            "Network segmentation",
            "User authentication"
        ]
    },
    {
        numb: 101,
        question: "A company wants to implement a secure communication system for remote employees to access internal resources. Which technology should the company use to provide a secure, encrypted connection over the Internet?",
        answer: "Virtual private network (VPN)",
        options: [
            "802.1X authentication",
            "Web application firewall (WAF)",
            "Intrusion detection system (IDS)",
            "Virtual private network (VPN)"
        ]
    },
    {
        numb: 102,
        question: "A network administrator wants to configure a firewall that can remember the state of active connections and make decisions based on the context of the traffic) Which type of firewall should be used?",
        answer: "Stateful inspection firewall",
        options: [
            "Stateful inspection firewall",
            "Proxy firewall",
            "Stateless firewall",
            "Application-level gateway (ALG)"
        ]
    },
    {
        numb: 103,
        question: "An organization wants to implement a solution combining multiple security functions into a single device to simplify network security. What type of solution should the organization consider?",
        answer: "Unified threat management (UTM)",
        options: [
            "Virtual private network (VPN)",
            "Intrusion detection system (IDS)",
            "Unified threat management (UTM)",
            "Next-generation firewall (NGFW)"
        ]
    },
    {
        numb: 104,
        question: "An organization is evaluating firewall options and requires a solution that inspects both application-level and network-level traffic) Which type of firewall should be recommended?",
        answer: "Next-generation firewall (NGFW)",
        options: [
            "Stateful firewall",
            "Web application firewall (WAF)",
            "Next-generation firewall (NGFW)",
            "Packet filtering firewall"
        ]
    },
    {
        numb: 105,
        question: "During a hardware audit, you discover that a legacy server, no longer receiving security updates, is increasing the risk to the network and is susceptible to new vulnerabilities. You develop a plan to remove the server from use. What process refers to taking hardware out of active service?",
        answer: "Decommissioning",
        options: [
            "Unpatched software",
            "Default credentials",
            "Decommissioning",
            "Misconfiguration"
        ]
    },
    {
        numb: 106,
        question: "A company’s IT department enforces a policy requiring all employees to change their passwords every 60 days. This policy is part of what type of security practice?",
        answer: "Password management",
        options: [
            "Network segmentation",
            "Encryption",
            "User training",
            "Password management"
        ]
    },
    {
        numb: 107,
        question: "In a network security audit, it was identified that the organization requires a system capable of both monitoring and automatically intervening in network traffic to mitigate identified threats. Which of the below system fulfills these requirements?",
        answer: "Intrusion prevention system (IPS)",
        options: [
            "Unified threat management (UTM) and virtual private network (VPN)",
            "Next-generation firewall (NGFW) and network access control (NAC)",
            "Web application firewall (WAF) and stateful firewall",
            "Intrusion prevention system (IPS)"
        ]
    },
    {
        numb: 108,
        question: "A university’s IT department enforces a strict configuration standard across all lab computers to ensure they meet the institution’s security requirements. What term best describes this centralized approach to maintaining consistent system settings?",
        answer: "Configuration enforcement",
        options: [
            "Configuration enforcement",
            "Patch management",
            "Access control list (ACL)",
            "Decommissioning"
        ]
    },
    {
        numb: 109,
        question: "A large enterprise implements a system that restricts access to sensitive data based on user roles and responsibilities. This system is an example of what kind of security control?",
        answer: "Least privilege",
        options: [
            "Network segmentation",
            "Access control list (ACL)",
            "Least privilege",
            "Encryption"
        ]
    },
    {
        numb: 110,
        question: "In response to recent security incidents, a financial institution implements a system that automatically isolates infected endpoints to prevent malware spread) Which of the following terms best describes this proactive measure?",
        answer: "Isolation",
        options: [
            "Isolation",
            "Encryption",
            "Least privilege",
            "Network segmentation"
        ]
    },
    {
        numb: 111,
        question: "A company’s IT department is tasked with improving the security of its Wi-Fi network. Which action would most effectively enhance the security of the network?",
        answer: "Implementing WPA3 encryption",
        options: [
            "Allowing open access to the Wi-Fi network to monitor traffic",
            "Reducing the signal strength of wireless access points",
            "Disabling the network broadcast name (SSID)",
            "Implementing WPA3 encryption"
        ]
    },
    {
        numb: 112,
        question: "An organization is developing its incident response plan to test its effectiveness. What exercise should the organization conduct to simulate a security incident and assess its plan without impacting live environments?",
        answer: "Tabletop exercise",
        options: [
            "Live-action role-playing",
            "Simulated cyberattack",
            "Full-scale drill",
            "Tabletop exercise"
        ]
    },
    {
        numb: 113,
        question: "In a BYOD (bring your own device) environment, what is a key security measure for managing mobile devices and protecting organizational data?",
        answer: "Implementing mobile device management (MDM) solutions",
        options: [
            "Using the same security settings for both personal and corporate data",
            "Implementing mobile device management (MDM) solutions",
            "Allowing unrestricted access to all corporate resources",
            "Encouraging users to install personal apps on work devices"
        ]
    },
    {
        numb: 114,
        question: "A software development company wants to ensure that its development and testing environments can survive a critical system failure with no user impact. What type of failover configuration should be implemented?",
        answer: "Active/active",
        options: [
            "Geographic dispersion",
            "Active/active",
            "Multi-cloud system",
            "Active/passive"
        ]
    },
    {
        numb: 115,
        question: "What is the most effective strategy for an organization to minimize the risk of mobile device theft and data loss?",
        answer: "Implementing remote wipe capabilities and data encryption",
        options: [
            "Implementing remote wipe capabilities and data encryption",
            "Limiting the use of mobile devices to senior management only",
            "Enforcing the use of strong, complex passwords",
            "Relying solely on antivirus software"
        ]
    },
    {
        numb: 116,
        question: "What is the most effective way to secure the growing number of IoT devices in a corporate environment?",
        answer: "Implementing network segmentation and regular firmware updates",
        options: [
            "Avoiding the use of IoT devices altogether",
            "Implementing network segmentation and regular firmware updates",
            "Disabling security features for easier management",
            "Connecting all devices to a single network for centralized management"
        ]
    },
    {
        numb: 117,
        question: "An online retailer’s website experiences high traffic volumes during sales events, leading to server overloads and downtime. What high availability strategy should the retailer employ to maintain operational continuity?",
        answer: "Load balancing",
        options: [
            "Parallel processing",
            "Load balancing",
            "Platform diversity",
            "Cold site"
        ]
    },
    {
        numb: 118,
        question: "In a corporate environment, what is a key security measure for securing industrial control systems (ICSs) and SCADA networks?",
        answer: "Implementing regular firmware updates and using VLANs",
        options: [
            "Implementing regular firmware updates and using VLANs",
            "Using the same network for ICS and corporate data",
            "Connecting ICSs to the public Internet for remote access",
            "Disabling all firewalls for uninterrupted communication"
        ]
    },
    {
        numb: 119,
        question: "A hospital’s IT director is evaluating backup solutions to ensure that patient records can be quickly restored after a data breach. The hospital needs a solution that minimizes data loss and allows fast recovery. Which backup strategy should the IT director prioritize?",
        answer: "Onsite backups",
        options: [
            "Offsite backups",
            "Onsite backups",
            "Incremental backups",
            "Differential backups"
        ]
    },
    {
        numb: 120,
        question: "An organization is considering deploying a sandboxing solution for its email system to combat malware. What is the primary benefit of this approach?",
        answer: "Isolating and analyzing suspicious email attachments in a controlled environment",
        options: [
            "Isolating and analyzing suspicious email attachments in a controlled environment",
            "Automatically deleting suspicious emails",
            "Enhancing email delivery speed",
            "Encrypting all incoming and outgoing emails"
        ]
    },
    {
        numb: 121,
        question: "During an annual risk assessment, a multinational corporation identifies a single point of failure in its IT infrastructure: reliance on one cloud provider. What strategy should the corporation adopt to mitigate this risk?",
        answer: "Multi-cloud system",
        options: [
            "Cloud service expansion",
            "Cloud service consolidation",
            "Multi-cloud system",
            "Cloud service redundancy"
        ]
    },
    {
        numb: 122,
        question: "An automotive company is implementing strategies to protect its vehicles’ real-time processing control systems. What approach might the company take to secure these systems, especially considering their strict time constraints for data processing?",
        answer: "Hardening real-time operating systems",
        options: [
            "Increasing network bandwidth",
            "Applying regular software updates",
            "Hardening real-time operating systems",
            "Enforcing strict access controls"
        ]
    },
    {
        numb: 123,
        question: "A company is standardizing the minimum-security configurations for its systems and software. Which of the following terms best describes establishing a completely standardized collection of security settings?",
        answer: "Establishing secure baselines",
        options: [
            "Implementing encryption standards",
            "Establishing secure baselines",
            "Creating security policies",
            "Conducting vulnerability assessments"
        ]
    },
    {
        numb: 124,
        question: "The CTO of a global trading firm is implementing a strategy to mitigate risks associated with dependency on a single data center located in an area with geopolitical tensions. What should the CTO establish to ensure operational resilience?",
        answer: "Geographic dispersion",
        options: [
            "Geographic dispersion",
            "Warm site",
            "Load balancing",
            "Clustering"
        ]
    },
    {
        numb: 125,
        question: "An organization uses different hardware and software platforms across its IT environment to reduce risks. Which term accurately describes this strategy of diversifying IT components?",
        answer: "Platform diversity",
        options: [
            "Platform diversity",
            "High availability",
            "Redundancy",
            "Multi-cloud systems"
        ]
    },
    {
        numb: 126,
        question: "An IT manager plans to secure the organization’s embedded systems, such as smart TVs and lighting systems. Which approach is most effective for hardening these systems?",
        answer: "Disabling unnecessary features and services",
        options: [
            "Regularly changing device passwords",
            "Disabling unnecessary features and services",
            "Enabling all available features and services",
            "Allowing all inbound and outbound connections"
        ]
    },
    {
        numb: 127,
        question: "A global enterprise sets up geographically distributed data centers that can take over services in the event one location goes offline due to a natural disaster. What strategy is the company using to ensure continued service availability?",
        answer: "Geographic redundancy",
        options: [
            "Clustering",
            "Geographic redundancy",
            "Load balancing",
            "High availability"
        ]
    },
    {
        numb: 128,
        question: "A logistics company deploys GPS tracking devices across its fleet of trucks. To prevent unauthorized access or tampering, what security practice should be implemented?",
        answer: "Configure strong authentication and encrypt GPS data transmissions",
        options: [
            "Configure strong authentication and encrypt GPS data transmissions",
            "Use open wireless protocols for easy data collection",
            "Disable authentication to reduce connectivity issues",
            "Share the same credentials across all tracking devices"
        ]
    },
    {
        numb: 129,
        question: "In a power outage, a data center maintains operations using an Uninterruptible Power Supply (UPS). What is the intended use of a UPS?",
        answer: "To provide temporary immediate power connectivity",
        options: [
            "To provide temporary immediate power connectivity",
            "Long-term backup power",
            "Primary power source",
            "Main power for data center operations"
        ]
    },
    {
        numb: 130,
        question: "An e-commerce company is revising its disaster recovery plan post-cyberattack. The plan now must include shifting operational load to another site with minimal interruption if the company’s primary data center is compromised) Which type of recovery site should the company consider?",
        answer: "Hot site",
        options: [
            "Hot site",
            "Warm site",
            "Cold site",
            "Mobile site"
        ]
    },
    {
        numb: 131,
        question: "A company has set up an alternate data center that mirrors its primary site for quick activation in emergencies. What term best describes this type of rapidly recoverable data center?",
        answer: "Hot site",
        options: [
            "Warm site",
            "Mobile site",
            "Cold site",
            "Hot site"
        ]
    },
    {
        numb: 132,
        question: "A company is looking to improve the security of its industrial control systems (ICS) and SCADA networks. Which of the following strategies would be most effective for protecting these systems?",
        answer: "Implementing regular firmware updates",
        options: [
            "Enabling default Internet services on the systems",
            "Using the same network segment for both administrative and operational traffic",
            "Connecting the SCADA systems directly to the corporate network",
            "Implementing regular firmware updates"
        ]
    },
    {
        numb: 133,
        question: "A security administrator configures a network to optimize Wi-Fi coverage and minimize interference. Which practice is most effective for achieving this goal?",
        answer: "Conducting a site survey and creating a heat map",
        options: [
            "Using the same channel for all WAPs",
            "Conducting a site survey and creating a heat map",
            "Placing wireless access points (WAPs) close to electrical equipment",
            "Setting all WAPs to their maximum transmission power"
        ]
    },
    {
        numb: 134,
        question: "A school district plans to deploy hundreds of tablets for student use. What is the most effective strategy for managing and securing these devices?",
        answer: "Use mobile device management (MDM) software to enforce security policies",
        options: [
            "Use mobile device management (MDM) software to enforce security policies",
            "Allow students full administrative access",
            "Let students install any applications they prefer",
            "Avoid applying restrictions to maintain usability"
        ]
    },
    {
        numb: 135,
        question: "In a healthcare facility, various medical devices connected to the network, such as heart rate monitors and infusion pumps, need enhanced security measures. What strategy should be employed for securing these types of embedded systems?",
        answer: "Implementing strict access control and encryption",
        options: [
            "Implementing strict access control and encryption",
            "Frequent software updates",
            "Limiting the use of antivirus software",
            "Using default manufacturer settings"
        ]
    },
    {
        numb: 136,
        question: "An airport authority is concerned about the risk of attacks on its connected security cameras and access control systems. What is the most appropriate measure to reduce this risk?",
        answer: "Conduct regular vulnerability scans and firmware updates",
        options: [
            "Conduct regular vulnerability scans and firmware updates",
            "Enable automatic updates on all devices without testing",
            "Use only physical barriers and guards",
            "Disable logging and alerting to avoid storage issues"
        ]
    },
    {
        numb: 137,
        question: "A financial institution is dedicated to ensuring that its critical online services are always accessible and available. Which of the following best describes this type of system?",
        answer: "High availability",
        options: [
            "Load balancing",
            "Clustering",
            "High availability",
            "Redundancy"
        ]
    },
    {
        numb: 138,
        question: "A smart manufacturing facility is integrating more IoT sensors across its production line. What is the best way to secure these devices without interrupting operations?",
        answer: "Segment the IoT devices on a separate VLAN and apply strong access control",
        options: [
            "Segment the IoT devices on a separate VLAN and apply strong access control",
            "Use default login credentials for easy device management",
            "Disable encryption to maintain performance",
            "Allow unrestricted Internet access for firmware updates"
        ]
    },
    {
        numb: 139,
        question: "A financial institution is planning for a potential regional electrical grid failure and wants to ensure that its data center can continuously operate with minimal disruption to operations. What should be included in the institution’s power management plan?",
        answer: "Uninterruptible power supply (UPS)",
        options: [
            "Uninterruptible power supply (UPS)",
            "Power generators",
            "Surge protectors",
            "Power conditioners"
        ]
    },
    {
        numb: 140,
        question: "A corporation performs a test to simulate a complete outage of its primary data center to evaluate how quickly and effectively operations can resume at an alternate location. What is this type of test called?",
        answer: "Full interruption test",
        options: [
            "Full interruption test",
            "Tabletop exercise",
            "Disaster recovery planning",
            "Business continuity assessment"
        ]
    }
];