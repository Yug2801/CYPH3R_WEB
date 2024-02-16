import React from 'react';
import image1 from  './media/image1.png'
import image2 from  './media/image2.png'
import image3 from  './media/image3.png'
import image4 from  './media/image4.png'
import image5 from  './media/image5.png'
import image6 from  './media/image6.png'
import image7 from  './media/image7.png'
import image8 from  './media/image8.png'
import image9 from  './media/image9.png'
import image10 from  './media/image10.png'
import image11 from  './media/image11.png'
import image12 from  './media/image12.png'
import image13 from  './media/image13.png'
import image14 from  './media/image14.png'
import Foote from '../components/footer';
import '../css/blogs.css'
import '../css/blog.css'
const Basic= () => {
  return (

    <div className="reveal">
    
    <div className="black-screen">  </div>

<div className="white-strip"></div>


      <div className="slides">
        <section className="slide ">
        <h1>Cybersecurity Basics</h1> 
        <p><strong>What is Cybersecurity?</strong></p>
          <p>Before we begin learning this cyber security for beginners tutorial, let us first understand what exactly is cyber security and what is its significance. Cybersecurity is the technology and process that is designed to protect networks and devices from attacks, damage, or unauthorized access. Cybersecurity is essential for a country’s military, hospitals, large corporations, small businesses, and other organizations and individuals since data is now the cornerstone of any organization. If that data is exploited, then there are a lot of risks. Now, we have understood what cybersecurity is, let’s see what the CIA triad is and how it is related to cybersecurity.</p>

<p>Cybersecurity is a popular topic, but do you know why it is essential? We are living in a digital era where data is everything. We must understand that private information is much more vulnerable than ever before. We often hear about data breaches and cases of identity theft that affect millions of consumers. Two years ago, WannaCry ransomware encrypted millions of computers. All companies and institutions are fighting to protect their data against hackers and cybercriminals, and you can also play a role in it. Cybersecurity is not involved only in organizations, but even personal computers, mobile phones, and tablets.</p>
<p><strong>What is Cybersecurity?</strong></p>
<p>Before we begin learning this cyber security for beginners tutorial, let us first understand what exactly is cyber security and what is its significance. Cybersecurity is the technology and process that is designed to protect networks and devices from attacks, damage, or unauthorized access. Cybersecurity is essential for a country’s military, hospitals, large corporations, small businesses, and other organizations and individuals since data is now the cornerstone of any organization. If that data is exploited, then there are a lot of risks. Now, we have understood what cybersecurity is, let’s see what the CIA triad is and how it is related to cybersecurity.</p>
<p><strong>CIA Triad</strong></p>
<p>The security of any organization starts with three principles: Confidentiality, Integrity, Availability. And next in this cyber security for beginners tutorial we will learn about the CIA Triad, which has served as the industry standard for computer security since the time of first mainframes.</p>
<p><img src={image1}   alt="CIA Triad" /></p>
<p>Fig: CIA triad</p>
<ul>
<li><p>Confidentiality: The principles of confidentiality assert that only authorized parties can access sensitive information and functions. Example: military secrets.</p></li>
<li><p>Integrity: The principles of integrity assert that only authorized people and means can alter, add, or remove sensitive information and functions. Example: a user entering incorrect data into the database.</p></li>
<li><p>Availability: The principles of availability assert that systems, functions, and data must be available on-demand according to agreed-upon parameters based on levels of service.</p></li>
</ul>
<p>Next up in the cyber security for beginners tutorial, let’s look at the areas and speciality in cybersecurity to understand the space better.</p>
<p><strong>Specialties in Cybersecurity</strong></p>
<p>To pursue your career in cybersecurity, it is essential to know about the areas of specialization in it, and this cyber security for beginners tutorial will help you do just that. There are nine:</p>
<ol type="1">
<li><p>Access control systems and methodology: This deals with protecting critical system resources from unauthorized modification.</p></li>
<li><p>Telecommunications and network security: This focuses on communications, protocols, and network services, and the potential vulnerabilities associated with each.</p></li>
<li><p>Security management practices: This area deals effectively with catastrophic systems failures, natural disasters, and other types of service interruptions.</p></li>
<li><p>Security architecture and models: This focuses mostly on having security policies and procedures in place. This particular security domain involves policy planning for just about every type of security issue.</p></li>
<li><p>Law, investigation, and ethics: This handles the legal issues associated with computer security.</p></li>
<li><p>Application and system development security: This person covers things like database security models and the implementation of multilevel security for in-house applications. </p></li>
<li><p>Cryptography: Designed to help you understand how and when to use encryption. </p></li>
<li><p>Computer operations security: This covers all those things that happen while your computers are running.</p></li>
<li><p>Physical security: This primarily addresses questions about physical access to your servers and workstations.</p></li>
</ol>
<p>A cyber security bootcamp provides hands-on experience and theoretical insights, allowing individuals to uncover their specific interests and strengths. By focusing on these specialties, participants can enhance their skills and knowledge, preparing them for roles that demand expertise in specific aspects of cybersecurity.</p>
<p><strong>Basic Terminologies</strong></p>
<p>Next up, this cyber security for beginners tutorial will help you understand some of the terminologies you must be familiar with before learning anything about cybersecurity. </p>
<p><strong>1. Network</strong></p>
<p>A network is a connection between two or more computers so that they can communicate with each other. For example:</p>
<p><img src={image2}  alt="Network Connection" /></p>
<p>Fig: Network Connection</p>
<p><strong>2. Internet</strong></p>
<p>Internet is a means of connecting a computer to any other computer anywhere in the world via dedicated routers and servers.</p>
<p><strong>3. Internet Protocols</strong></p>
<p>The data that is transferred or received cannot follow any path. There are a set of rules that are followed to control the flow of the internet<u>.</u> These rules are called internet protocol.</p>
<p><strong>4. IP Address</strong></p>
<p>An Internet Protocol address (IP address) is an address assigned to all devices that connect to a computer network and uses the Internet Protocol for communication. An IP address looks like this: 168.192.10.3</p>
<p><strong>5. MAC Address</strong></p>
<p>This is a unique identification number that every device has that connects to the internet. Traditional MAC addresses are 12-digit hexadecimal numbers. MAC address looks like this: D8-FC-93-C5-A5-EO.</p>
<p><strong>6. Domain Name Server(DNS)</strong></p>
<p>Consider DNS as the phonebook of the internet. All the IP addresses and the name of the links are saved in it. For example, you want to go to google.com. You type this on your web application. Then, this name goes to the DNS server, and the DNS server finds the IP address of google.com. Then, the DNS server returns it to your computer with the IP address.</p>
<p><img src={image3}   alt="Domain Server" /></p>
<p>Fig: DNS Server Illustration</p>
<p><strong>7. DHCP</strong></p>
<p>Dynamic host configuration protocol is a protocol that assigns an IP address to any device that wants to connect to the internet.</p>
<p><img src={image4}  alt="DHCP" /></p>
<p>Fig: DHCP providing IP addresses</p>
<p><strong>8. Router</strong></p>
<p>This is a device that routes the data that comes to it and then sends that data to the destination to ensure that it is on the appropriate path.</p>
<p><strong>9. Bots</strong></p>
<p>Bots are computer programs that control your computer without your knowledge. They automatically send emails, retrieve web pages, and change computer settings.</p>
<p>Upon completing this cyber security for beginners tutorial, build your network security skill-set with the Ethical Hacking Certification Training. Enroll today!</p>
<p><strong>Common Types of Attacks</strong></p>
<p>Before we get into the types of attacks<u>,</u> we should know why these attacks happen, and this cyber security for beginners tutorial will help you learn A-Z of both. There is always a motive behind every attack; the main reason for attacks is money. Hackers penetrate the system and then demand ransom from the victims. There are other reasons like a financial loss to the target, achieving a state’s military objective, damaging the reputation of the target, or political maneuvering.</p>
<p>There are mainly five types of attacks:</p>
<ol type="1">
<li><p>Distributed denial of service(DDoS)</p></li>
<li><p>Man in the middle</p></li>
<li><p>Email attacks</p></li>
<li><p>Password attacks</p></li>
<li><p>Malware attack</p></li>
</ol>
<p>In the next section of this cyber security for beginners tutorial, let’s look at all the attacks in detail:</p>
<p><strong>1. <p><u>Distributed Denial of Service</u></p></strong></p>
<p>It is an attack used to restrict a user from accessing the resources by flooding the traffic that is used to access resources. A botnet controller controls all the bots that are under it. The attacker sends a command to the botnet controller that tells all bots to attack a server so that the server will be flooded. When a user wants to access a website, he will not be able to, as the traffic on the website will be at full capacity.</p>
<p><img src={image5}   alt="DDoS Illustration" /></p>
<p>      Fig: DDoS Illustration</p>
<p><strong>2. Man in the Middle</strong></p>
<p>Let’s look at an example to understand this better. Suppose you want to do an online transaction and you connect to your bank and make the payment.</p>
<p><img src={image6}   alt="Man in the middle attack" /></p>
<p>   Fig: Man in the middle attack (1)</p>
<p>Now, while you are completing the transaction, you have to put in credit card details and the PIN. The attacker can spoof you and monitor your transaction. As soon as you put in your details, he will see them.</p>
<p><img src={image7}   alt="Man in the middle attack" /></p>
<p>  Fig: Man in the middle attack (2)</p>
<p><strong>3. Password Attack</strong></p>
<p>To crack a password or find a password, we use this technique. There are five types of password attacks:</p>
<ul>
<li><p>Dictionary attack: In this method, we handle every password that is possible through the dictionary.</p></li>
<li><p>Brute force: This is a trial and error method used to decode the password or data. This attack takes the most amount of time.</p></li>
<li><p>Keylogger: As the name suggests, a keylogger records all keystrokes on a keyboard. Most hackers use keyloggers to get passwords and account details.</p></li>
<li><p>Shoulder surfing: The attackers observe the user’s keyboard by looking over the user’s shoulder.</p></li>
<li><p>Rainbow table: There are rainbow tables that contain precomputed hash values. Attackers use this table to find the password of the user.</p></li>
</ul>
<p><strong>4. Email Attacks</strong></p>
<p>First, let’s see how an email works. Suppose John is sending an email to Jack. The email first goes to the email server. Then it goes to the DNS server to find the IP address of the destination. From the source email server, the email goes to the destination server. From there, the email is sent to the IP address on which Jack is working. It is illustrated in the picture below.</p>
<p><img src={image8}   alt="How email works" /></p>
<p>       Fig: How email works.</p>
<p>There are three types of email attacks. </p>
<ul>
<li><p><u>Phishing</u>: The attacker sends bait, often in the form of an email. It encourages people to share their details. For example, you receive an email like this:<br />
<br />
<img src={image9}   alt="email1" /><br />
<br />
If someone is a customer of ABC bank, he would probably open the link and give the details. But these kinds of emails are always phishing; banks do not send emails like this.</p></li>
<li><p><u>Spoofing</u>: The attacker pretends to be another person or organization and sends you an email stating that it is a legitimate email. For example:<br />
<br />
<img src={image10}   alt="email2" /><br />
<br />
After seeing this email, you might share the password to your computer. Always ask the person from whom you received the email one more time to confirm that he is the right person.</p></li>
<li><p><u>Email attachments</u>: You can send files through emails. These files may be images, documents, audio, or videos. Attackers send you an email, and you are encouraged to open the attached file. For example:<br />
<br />
<img src={image11}   alt="email3" /></p></li>
</ul>
<p>Download these attachments only if you are sure that it is a legitimate email.</p>
<p><strong>5. Malware Attack</strong></p>
<ul>
<li><p>Malware: This is a malicious program or software that disrupts or damages the computer. There are three types of malware.</p></li>
<li><p>Virus: A computer virus is a malicious code that replicates by copying itself to another program or document and changes how a computer works. The virus requires someone to knowingly or unknowingly spread the infection without the knowledge or permission of a user or system administrator. An example of a virus is the Melissa virus.</p></li>
<li><p>Worms: These are standalone programs that run independently and infect systems. For example, W32.Alcra.F is a worm that propagates through network share devices.</p></li>
</ul>
<p><strong>Functions of Malware</strong></p>
<ol type="1">
<li><p>Overwhelming system resources: Malware, especially worms, can spread around and overwhelm a system or network. Some malware creates so many folders that no memory is left and slows a computer down.</p></li>
<li><p>Creating a backdoor: Let’s look at an example: Microsoft sends updates every Sunday on all Windows platforms. How do these updates reach to your Windows OS? They create backdoors from where they can send updates. Similarly, hackers create backdoors from where they can continuously send viruses after getting into a system.</p></li>
<li><p>Disabling security functions: Some malware can disable antivirus software, as well as security updates. This malware tends to last longer because there is no security to stop it. They tend to keep the system vulnerable to other malware.</p></li>
<li><p>Creating botnets: Hackers make botnets by purely coding. A botmaster controls botnets, and they are usually used to crash websites. Botmaster tells all botnets to flood the website by accessing the website at the same time. </p></li>
</ol>
<p><strong>Sources of Malware</strong></p>
<ol type="1">
<li><p>Removable media: Removable media, like Pendrive, CDs, DVDs, and flash drives, may be used to send viruses to your system. </p></li>
<li><p>Documents and executable files: Viruses can be hidden in document files with the .exe extension. As soon as you open them, the virus activates.</p></li>
<li><p>Internet downloads: Download files only from trusted websites. If you download from untrusted websites, there may be chances that those files will contain viruses, and as soon as you open them, the hacker might get access to your system. </p></li>
<li><p>Network connections: Be sure that your service provider is genuine. If the network is unsecured, then it can be accessed by anyone.</p></li>
<li><p>Email attachments: Never open email attachments unless the sender can be trusted. These files may contain viruses to create backdoors.</p></li>
<li><p>Malicious advertisements: Never click on ads that you don’t trust. They are created so that you can click on them, and hackers will receive details about you. </p></li>
</ol>
<p><strong>Job Roles </strong></p>
<p>The kind of job you do is definitely something you wish to consider before you step foot in any field. In this section of the cyber security for beginners tutorial, we will learn about top roles in the cybersecurity field:</p>
<ol type="1">
<li><p>Chief Information Security Officer: Manages the IT security division of an organization.</p></li>
<li><p>Forensic Computer Analyst: Looks for evidence after the breach or attack on an organization.</p></li>
<li><p>Information Security Analyst: Protects the computer systems and networks of an organization.</p></li>
<li><p>Penetration Tester: Penetration testers are highly skilled security specialists that spend their days attempting to breach computer and network security systems.</p></li>
<li><p>IT Security Engineer: Plan to carry security measures to monitor and protect data and systems from hackers and cyber attacks.</p></li>
<li><p>Security Architect: Maintain the network security of an organization.</p></li>
<li><p>Security Systems Administrator: Install, administer, maintain, and troubleshoot a computer, network, and data security systems are their responsibilities.</p></li>
<li><p>IT Security Consultant: Protect the organization’s sensitive data.</p></li>
</ol>
<p>What did you learn from this cyber security for beginners tutorial and how much do you know about security concepts? Take up this CISSP Practice Exam and test yourself.</p>
<p><strong>Cyber Security Certifications</strong></p>
<p>To start your career in the cybersecurity field, you must know the certifications that you need to clear to get into this field. Wondering what are they? This cyber security for beginners tutorial has got that covered for you too. The top three certifications are: </p>
<ol type="1">
<li><p>CEH (Certified Ethical Hacker): The Certified Ethical Hacking (CEH V10) Course will train you in reverse engineering so that you can better protect corporate infrastructures from data breaches.<br />
<br />
<img src={image12} alt="CEH Certification" /></p></li>
<li><p>CompTIA Security+: The CompTIA Security+ Certification is a globally trusted to validate foundationally, vendor-neutral IT security knowledge and skills.<br />
<br />
<img src={image13}  alt="CompTIA Security+" /></p></li>
<li><p>CND (Certified Network Defender): The Certified Network Defender (CND) Certification Covers protecting, identifying, and responding to network security, and teaches an arsenal of tools to provide real-world experience on current network security methodologies.<br />
<br />
<img src={image14} alt="CND" /></p></li>
</ol>
<p>Check out the below video, to sum up this tutorial on cybersecurity -</p>
<p>There is substantial evidence that cybersecurity is in demand right now. This demand will continuously grow, and it is challenging to measure labor supply or demand in this field. The primary reason for growing this field is that technology is improving every day. It is good that the whole world is working together to reduce cyberattacks because of the economy and communication across the globe. cybersecurity is a complex subject that requires knowledge and expertise from multiple disciplines but not limited to computer science and information technology.</p>

</section>
    </div>
<Foote/>
  </div>

  
  );
};

export default Basic;
