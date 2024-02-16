import React from 'react';
import Foote from '../components/footer';
import '../css/blogs.css'
import '../css/blog.css'
const Cryptography= () => {
  return (
<div class="reveal">
<div className="black-screen">  </div>

<div className="white-strip"></div>
<div class="slides">


<section class="slide level6">
<h1>Cryptography</h1>
<p>Cryptography is both art and science referred almost exclusively to encryption, which is the process of converting ordinary information (called plaintext) into unintelligible gibberish (called ciphertext). We can also say that Cryptography is about communication in the presence of an adversary.</p>
<p>Cryptography guarantees basic security services authorization, authentication, integrity, confidentiality, and non-repudiation in all communications and data exchanges in the new information society.</p>
<p>These guarantees are achieved as follows:</p>
<p><strong>Confidentiality</strong> - through encryption</p>
<p><strong>Authentication</strong> - through digital signatures and digital certificates</p>
<p><strong>Integrity</strong> - through generating a digital signature with a public key and obtain the message digest, then hashing the message to obtain a second digest. If the digests are identical, the message is authentic and the signer’s identity is proven.</p>
<p><strong>Non-repudiation</strong> - through digital signatures of a hashed message then encrypting the result with the private key of the sender, thus binding the digital signature to the message being sent.</p>
<p><strong>Non-replay</strong> – through encryption, hashing, and digital signature</p>
<p><strong>Type of Encryptions</strong></p>
<p>Key-based encryption algorithm can either be symmetric, also commonly known as conventional encryption, or asymmetric, also known as public key encryption.</p>
<p><strong>Symmetric Encryption</strong></p>
<p>Symmetric encryption or secret key encryption uses a common key and the same cryptographic algorithm to scramble and unscramble the message.</p>
<p><strong>Symmetric Encryption Algorithms</strong></p>
<p>The most widely used symmetric encryption method is the block ciphers Triple Data Encryption Standard (3DES). Triple DES developed from the original and now cracked DES uses a 64-bit key consisting of 56 effective key bits and 8 parity bits.</p>
<p><strong>Problems with Symmetric Encryption</strong></p>
<p>Symmetric encryption, although fast, suffers from several problems in the modern digital communication   environment including:</p>
<p>The biggest problem - that of a single key that must be shared in pairs of each sender and receiver. In a distributed environment with large numbers of combination pairs involved in many-to-one communication topology, it is difficult for the one recipient to keep so many keys in order to support all communication.</p>
<p>The size of the communication space presents problems. Because of the massive potential number of individuals who can carry on communication in a many-to-one,  one-to-many, and many-to-many  topologies supported by the Internet for example, the secret-key cryptography, if strictly used, requires billions of secret keys pairs to be created, shared, and stored.</p>
<p><strong>Public Key Encryption</strong></p>
<p>Public key encryption, commonly known asymmetric encryption, uses two different keys, a public key known by all and a private key known by only the sender and the receiver. Both the sender and the   receiver own a pair of keys, one public and the other a closely guarded private one. To encrypt a message from sender A to receiver B, both A and B must create their own pairs of keys. Then A and B publicize their public keys – anybody can acquire them. When A is to send a message M to B, A uses B’s public key to encrypt M. On receipt of M, B then uses his or her private key to decrypt the message M. As long as only B, the recipient, has access to the private key, then A, the sender, is assured that only B, the recipient, can decrypt the message. This ensures data confidentiality.  Data integrity is also ensured because for data to be modified by an attacker it requires the attacker to have B’s, the recipient’s private key. Data confidentiality and integrity in public key encryption is also guaranteed.</p>
<p><strong>Public Key Encryption Algorithms</strong></p>
<p>Various algorithms exist for public key encryption including RSA, DSA, PGP, and El Gamal.</p>
<p>Problems with Public Key Encryption</p>
<p>Although public key encryption seems to have solved the major chronic encryption problems of key exchange and message repudiation, it still has its own problems.</p>
<p>The biggest problem for public key cryptographic scheme is speed. Public key algorithms are extremely slow compared to symmetric algorithms. This is because public key calculations take longer than symmetric key calculations since they involve the use of exponentiation of very large numbers which in turn take longer to compute.  For example, the fastest public key cryptographic algorithm such as RSA is still far slower than any typical symmetric algorithm. This makes these algorithms and the public key scheme less desirable for use in cases of long messages.</p>
<p>Public key encryption algorithms have a potential to suffer from the man-in-the-middle attack. The man-in-the-middle attack is a well known attack, especially in the network community where an attacker sniffs packets off a communication channel, modifies them, and inserts them back on to the channel.</p>
</section>
</div>
<Foote/>
  </div>
  );
};

export default Cryptography;