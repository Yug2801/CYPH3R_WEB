import React from 'react';
import image_ip1 from  './media/image_ip1.png'
import image_ip2 from  './media/image_ip2.png'
import image_ip3 from  './media/image_ip3.png'

import Foote from '../components/footer';
import '../css/blogs.css'
import '../css/blog.css'
const Ipaddress= () => {
  return (
<div class="reveal">
<div className="black-screen">  </div>

<div className="white-strip"></div>
    <div class="slides">


<section class="slide level6">
<h1>IP Address</h1>
<p>With the advancement of technology, a drastic need for an IP address for each network device arises, just like how a letter is provided with the destination address, which acts as a location method for the postman. Similarly, an IP address is a network-related protocol that comes into the picture when the task is related to establishing an internet connection. An IP address is also a very basic term which most people are aware of whenever you connect your system or network device to the internet. Through this tutorial on what is an IP address, you will be able to understand much more about the topic. </p>
<p><strong>What Is an IP Address?     </strong></p>
<p>An Internet protocol address (IP address) is a unique combination of numbers and periods such as 172.1.1.1. This combination of numbers acts as an identity for the network device when it connects to the internet. </p>
<p>This identity is then used to access data and information available on the web when the client device sends a request to the server and is passed through routers, hubs, and other network nodes.</p>
<p>The need for an IP address also increases with the number of network devices that connect to the internet. The IANA issues the IP addresses (Internet Assigned Numbers Authority), a department under the ICANN, where ICANN is a corporation that aims to maintain internet security.</p>
<p><strong>Why Use an IP Address?</strong></p>
<p>IP addresses are not only essential when connecting to the internet but also performs other functions, which are:</p>
<ol type="1">
<li><p>Identity for the host: This function of the IP address is responsible for providing the network device that accesses the internet with a unique identity on the web. This identity allows the system to access data available on the internet and as an identifier for the hubs, routers, or switches it connects to and access data.</p></li>
<li><p>Location of the host: As the name suggests, the other function of the IP address provides the system’s location on the network. This is beneficial because, in case of a hacking incident or spamming, you can track the perpetrator through the system's IP address used to execute the task.</p></li>
</ol>
<p><strong>Working of an IP Address</strong></p>
<p>During web surfing, you often face internet connection problems which might be because of the problem from the server side or with the system's IP address. But how is the connection between your system and the internet service provider established? </p>
<p>In this part of the tutorial on what is an IP address, you will step-wise understand the connection method: </p>
<p>The following steps can help us walk through how our system gets connected to the internet and the role of IP address in it:</p>
<ol type="1">
<li><p>The first step begins with your system, smartphone, and other network devices establishing a connection between the network device (wi-fi), which would, in a way, indirectly connect your device with the internet.</p></li>
<li><p>If our device connects to the internet through our home network, then the connection is provided by the Internet Service Provider (ISP). In contrast, in the case of a professional location, it provides the network through the company network.</p></li>
<li><p>At this step, your system is provided with its IP address by the network.</p></li>
<li><p>The system's request for an internet connection goes through the ISP, where the requested information is routed back to the system using the IP address. As the ISP establishes the internet connection to our system, it is also responsible for assigning the IP address to your device.</p></li>
<li><p>The IP addresses assigned to the system are never consistent. They change each time you connect to the internet through the network (ISP). You can also contact your ISP to provide your system with a different IP address.</p></li>
<li><p>In case you are traveling or are out of your home network, the internet connection established to the system is provided by an alternative network (public wi-fi, airport hotspot, etc.), which assigns the system with a temporary IP address provided by the ISP of the location network.</p></li>
</ol>
<p><strong>Versions of IP Address</strong></p>
<p>In accordance with the increase in the demand for IP addresses, the original IP address, i.e., IPv4 addresses, did not cover the requirement, so the establishment of IPv6 address was done which includes IP addresses that could easily satisfy the present demand and was sufficient for the future demand as well.</p>
<p><strong>IPv4 Addresses</strong></p>
<p><img src={image_ip1} alt="IPv4" /></p>
<p>This is the original version of the IP address, which was developed based on a 32-bit binary format and contained 232 addresses, which was sufficient at the initial time of making but somewhat lacking considering the increase in the current network advancement.</p>
<p>The addresses ranged from 0 to 255 in terms of 0s and 1s, with four octets, each of them separated by a period (.). The network device uses the binary format, whereas the numerical format is used for the host's reference.</p>
<p><strong>IPv6 Addresses</strong></p>
<p><img src={image_ip2} alt="IPv6." /></p>
<p>An IPv6 address is designed from 128 bits from which 4 hexadecimal digits and eight sets are created, with each block containing 16 bits separated by a colon (:).</p>
<p><img src={image_ip3} alt="IPv6_1" /></p>
<p>IPv6 addresses are used to indicate the source and destination of each packet by including them in the packet header. The routing structure of the IP packets is assigned by using the IP address of the destination. </p>
<p><strong>Types of IP Addresses</strong></p>
<p>Each type of IP address can further be classified into different types of IP address category, they are:</p>
<p><strong>Consumer IP Addresses</strong></p>
<p>The network connection, whether individual or professional with an active internet connection, follows two categories of IP addresses, i.e., Private IP addresses and Public IP addresses. Each of them is functional within their respective network locations, private IP addresses are accessible within the network, and public IP addresses function outside the network.</p>
<p><strong>1. Private IP Addresses</strong></p>
<p>The devices you connect to the internet network are all associated with the IP address, including laptops, computers, smartphones, etc. Also, with the advancement in the technology related to IoT(internet of things), the requirement for private IP addresses increased drastically. The network device (router) needs to identify the system individually. Then only the router would be able to generate private IP addresses for each of them to differentiate over the network.</p>
<p><strong>2. Public IP Addresses</strong></p>
<p>The public IP address acts as a whole primary address that contains all the other network devices associated with the network. Each device in the network is assigned its private IP address. The Internet Service Provider (ISP) supervises the assignment of the public IP address to the network device(router). ISPs accumulate a large number of IP addresses that they assign to their clients.</p>
<p>Public IP addresses can be further divided into two subcategories:</p>
<ul>
<li><p><strong>Dynamic IP Addresses</strong></p></li>
</ul>
<p>These types of IP addresses are the ones that are non-consistent and frequently changing. They are assigned by the ISPs from their large accumulation of IP addresses in accordance with the client's requirements. This way, frequently changing IP addresses prove to be cost-effective for the ISPs and also provide security from hackers and cybercriminals to a certain extent.</p>
<ul>
<li><p><strong>Static IP Addresses</strong></p></li>
</ul>
<p>As the name suggests, Static IP addresses are the type of constant addresses, unlike dynamic IP addresses. The IP address assigned to the system by the network device remains consistent. Due to the constant nature of the static IP address, companies and individuals avoid using static IP addresses. But they are required in case if a firm wants to assign a host to its network server.    </p>
<p><strong>Conclusion</strong></p>
<p>In this 'What is an IP Address' tutorial, you understood the IP addresses and their importance in accessing an internet connection. You also understood the path through which the systems are assigned IP addresses with how the ISPs use IP address pools to assign IP addresses according to the client's requirement. </p>
<p>Then, you learned about the two main functions of an IP address over the network, which were identifying the system and locating the system on the network from the article on what is an IP address. If you want to further increase your knowledge about the topic and also build up a successful career out of it, then you can refer to Simplilearn’s Advanced Executive Program In Cyber Security course, to begin with. </p>
<p>Do you have any questions related to this tutorial on what is an IP address? If yes, feel free to mention them in the comments section at the bottom of this page. Our team will help you solve your queries ASAP.</p>
</section>
    </div>
    <Foote/>
  </div>
    );
};

export default Ipaddress;