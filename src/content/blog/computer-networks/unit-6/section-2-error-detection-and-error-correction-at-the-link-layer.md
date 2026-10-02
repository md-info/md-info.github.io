---
title: "Section 2 Error-Detection and Error-Correction at the Link Layer"
description: "Computer Networks study notes · Unit 6"
publishDate: 2026-10-01
category: "Coursework"
folder: "Coursework/COMP 437 Computer Networks/Unit 6"
tags: ["computer-networks"]
listed: false
draft: false
---

# Text-to-Speech Q&A Document: Error-Detection and Error-Correction at the Link Layer

**Purpose:** Exam preparation for Section 6.2, Error-Detection and -Correction Techniques. This document is designed to be read aloud for auditory learning. Each question is followed by a comprehensive answer. Key terms are bolded for emphasis.

---

## Foundational Concepts

**Question 1: What are bit-level errors, and why do they occur at the link layer?**

Bit-level errors occur when individual bits in a transmitted frame are altered during transmission over a communication link. A transmitted bit may arrive at the receiver as its opposite value—a 0 may become a 1, or a 1 may become a 0. These errors are caused by signal attenuation and electromagnetic noise on the physical channel. At the link layer, the concern is with detecting and potentially correcting these errors before the frame is passed to higher layers. Error detection and correction at the link layer is crucial because it is the last layer that can detect errors before the data reaches the network and transport layers.

**Question 2: What are error-detection and correction bits, commonly abbreviated as EDC?**

EDC stands for Error Detection and Correction bits. These are redundant bits added to the original data before transmission. The sender computes these bits based on the data and appends them to the frame. The receiver then performs the same computation on the received data and compares the result with the received EDC bits. If they match, the receiver assumes no error occurred; if they do not match, an error is detected. It is important to understand that error detection is not one hundred percent reliable—the protocol may miss some errors, but this is rare. A larger EDC field yields better detection and correction capabilities.

**Question 3: What are undetected bit errors, and why do they matter?**

Undetected bit errors occur when the error-detection scheme fails to identify that one or more bits have been corrupted during transmission. This means the receiver accepts the frame as error-free when it actually contains errors. Undetected errors matter because they can propagate to higher layers and potentially cause incorrect application behavior. Error-detection schemes are designed to minimize the probability of undetected errors, but no scheme is perfectly reliable. The probability of undetected errors depends on the specific technique used and the nature of the errors introduced by the channel.

---

## Parity Checks

**Question 4: What is a parity check, and how does a parity bit work for a given N-bit unit of data?**

A parity check is one of the simplest error-detection techniques. For a given N-bit unit of data, a single additional bit—the parity bit—is appended. The parity bit is chosen so that the total number of 1-valued bits in the N-plus-one bit unit is either even or odd, depending on the chosen scheme. In even parity, the parity bit is set to make the total count of ones an even number. In odd parity, the parity bit ensures the total count of ones is an odd number. The parity bit can be computed as the exclusive-or, or XOR, of all the data bits. This is the fundamental building block for many more sophisticated codes.

**Question 5: How can a simple single-bit parity check be used to detect errors?**

With single-bit parity, the sender computes the parity bit and includes it with the data. The receiver recalculates the parity over the received data bits and compares the result with the received parity bit. If the recalculated parity does not match the received parity bit, the receiver knows that at least one bit error has occurred. However, a critical limitation of single-bit parity is that it can only detect an odd number of bit errors. If an even number of bits are flipped—such as two, four, or six bits—the parity calculation will still produce a matching result, and the error will go undetected. The minimum Hamming distance for a single-bit parity code is two, which means it can detect at most one bit error but cannot correct any errors.

**Question 6: How is a two-dimensional parity checksum calculated for a given data stream?**

Two-dimensional parity extends the idea of single-bit parity by arranging the data bits into a matrix of rows and columns. The process works as follows. First, the d bits of data are divided into i rows and j columns. A parity value is computed for each row, producing i row-parity bits. Then, a parity value is computed for each column, producing j column-parity bits. Finally, a parity bit is computed over the row-parity bits themselves, or equivalently, over the column-parity bits. The resulting set of i plus j plus one parity bits comprises the error-detection bits for the frame. This creates a redundancy that is significantly more powerful than single-bit parity.

**Question 7: How can a two-dimensional parity checksum be used for one-bit error correction?**

The power of two-dimensional parity lies in its ability to not only detect but also correct single-bit errors. If a single bit in the data matrix is corrupted, both the parity of the row containing that bit and the parity of the column containing that bit will be in error. The receiver can identify the exact location of the corrupted bit by finding the intersection of the row with the failed row-parity check and the column with the failed column-parity check. Once the corrupted bit is identified, the receiver can simply flip it back to its correct value. This ability of the receiver to both detect and correct errors without resorting to retransmission is a form of forward error correction. The minimum Hamming distance for a two-dimensional parity code is four, which allows it to detect up to three-bit errors and correct single-bit errors.

---

## Forward Error Correction

**Question 8: What is forward error correction, or FEC?**

Forward error correction, abbreviated FEC, is a technique in which the receiver can not only detect errors but also identify and correct bit errors without needing the sender to retransmit the frame. The sender adds sufficient redundancy to the data so that the receiver can determine the original message even when some bits are corrupted. FEC reduces the need for retransmissions, which can be particularly valuable in situations where retransmission is costly or impossible, such as in satellite communications or real-time streaming. The trade-off is that FEC requires more redundant bits than simple error detection, reducing the effective data rate. A simple example of FEC is the two-dimensional parity scheme discussed previously, which can correct single-bit errors. More sophisticated FEC techniques include Hamming codes and other block codes that are designed to have specific error-correcting capabilities based on their minimum Hamming distance.

---

## Checksum Methods

**Question 9: What is a checksum in the link layer, and how does the Internet checksum work?**

A checksum is an error-detection technique that treats the data as a sequence of integers and computes a sum over those integers. While the Internet checksum is primarily used at the transport layer in TCP and UDP, and at the network layer in IP, the concept of checksum methods is relevant to understanding error detection generally. The Internet checksum algorithm works as follows at the sender. The segment contents are treated as a sequence of sixteen-bit integers. These integers are summed together using ones' complement addition, which means any carry that overflows the sixteen-bit boundary is wrapped around and added back to the least significant bits. The resulting sum is then negated, or complemented, to produce the checksum value, which is placed into the checksum field of the header. At the receiver, the same computation is performed over the received segment, including the checksum field. If the result is all ones or equivalently, if the computed checksum equals the received checksum, the receiver declares that no error has been detected.

**Question 10: What are the strengths and weaknesses of the Internet checksum compared to CRC?**

The Internet checksum is simple, fast, and easy to implement in software, which is why it is used at the transport layer where processing speed is important. It is space-efficient, using only sixteen bits regardless of message length. However, the Internet checksum has weaker error-detection properties than CRC. While it can detect any single-bit error, it provides no guarantees beyond that. For example, certain patterns of multiple-bit errors can go undetected. In contrast, CRC provides much stronger protection against both single-bit and burst errors, making it the preferred choice for the link layer where hardware implementation is feasible and error-detection requirements are more stringent.

---

## Cyclic Redundancy Check and Polynomial Codes

**Question 11: What is a cyclic redundancy check, or CRC?**

A cyclic redundancy check, commonly abbreviated CRC, is a powerful and widely used error-detection technique at the link layer. It is based on binary division rather than addition, using modulo-two arithmetic. In CRC, the data bits are viewed as a binary number, and a generator polynomial, represented as a bit pattern of length r plus one, is chosen by both sender and receiver. The sender computes r CRC bits such that the combined data-plus-CRC bit sequence is exactly divisible by the generator polynomial using modulo-two division. The receiver performs the same division on the received sequence. If the remainder is non-zero, an error is detected. CRC is used in practice in Ethernet, Wi-Fi, and ATM, among other link-layer technologies.

**Question 12: How does a cyclic redundancy check work for multiple-bit error detection?**

The CRC algorithm works through the following steps. The sender and receiver agree on a generator polynomial G of degree r, which is represented as an r-plus-one bit pattern. To transmit a message M of n bits, the sender first multiplies M by two to the power of r, which is equivalent to shifting M left by r positions and appending r zeros. This shifted value is then divided by G using modulo-two division, which is simply XOR operations with no carries or borrows. The remainder R of this division, which is r bits long, becomes the CRC bits. The sender transmits the original message M followed by the CRC bits R, forming a sequence T. At the receiver, the received sequence T is divided by the same generator polynomial G. If the remainder is zero, the receiver concludes that no error was detected. The key insight is that the transmitted sequence T is constructed to be exactly divisible by G, so any non-zero remainder at the receiver indicates corruption during transmission.

**Question 13: What are polynomial codes, and how do they relate to CRC?**

Polynomial codes are a mathematical framework for understanding CRC and other cyclic codes. In this framework, bit patterns are represented as polynomials with binary coefficients, where each bit corresponds to a coefficient of a power of x. For example, the bit pattern 1011 represents the polynomial x cubed plus x plus one. The operations of addition and subtraction in this polynomial ring are performed modulo two, which means they are equivalent to XOR operations. The generator polynomial G of degree r is the key to CRC. The sender chooses the CRC bits such that the entire transmitted frame, when represented as a polynomial, is divisible by G with zero remainder. The receiver checks this divisibility. The error-detection capability of a CRC code depends on the properties of the generator polynomial. A carefully chosen G can detect all single-bit errors, all double-bit errors, all odd-numbered errors, and all burst errors up to length r.

**Question 14: What types of errors can a CRC with r check bits detect?**

A CRC with r check bits provides very strong error-detection guarantees. It can detect all single-bit errors, provided the generator polynomial has at least two non-zero terms. It can detect all burst errors of length less than or equal to r. A burst error is defined as a contiguous sequence of corrupted bits where the first and last bits are in error. For burst errors longer than r plus one bits, the probability of an undetected error is approximately one over two to the power of r minus one, assuming all bit patterns are equally likely. Additionally, if the generator polynomial has x plus one as a factor, the CRC can detect all errors consisting of an odd number of inverted bits. The choice of generator polynomial is critical to the error-detection capability. Standard polynomials such as CRC-32 are used in practice to provide robust protection.

---

## Error Correction Techniques

**Question 15: What techniques are used for error correction in the link layer?**

Error correction in the link layer can be accomplished through forward error correction techniques such as Hamming codes and other block codes. Hamming codes are a family of error-correcting codes that add multiple parity bits to the data, each parity bit covering a specific subset of the data bits. The pattern of which parity checks fail allows the receiver to identify the location of a single-bit error and correct it. The general principle is that if r redundancy bits are added to n data bits, the r bits must be able to represent at least n plus r plus one different states, corresponding to no error plus the possibility of an error in any of the n plus r bit positions. Another approach to error correction is through retransmission protocols, where the receiver detects an error and requests that the sender retransmit the frame. This is not strictly forward error correction, but it is a form of error recovery. Automatic Repeat reQuest, or ARQ, protocols use acknowledgments and negative acknowledgments to manage retransmissions.

**Question 16: What is the relationship between Hamming distance and error detection or correction capability?**

The Hamming distance between two bit strings is the number of bit positions in which they differ. For a coding scheme, the minimum Hamming distance, often denoted as d-min, is the smallest Hamming distance between any two valid codewords. The error-detection and error-correction capabilities of a code are directly determined by its minimum Hamming distance. A code with minimum distance d-min can detect up to d-min minus one bit errors. For example, a code with d-min equal to two can detect single-bit errors but cannot correct any errors, which is the case for simple parity. A code with d-min equal to three can detect up to two-bit errors and can correct single-bit errors, which is the capability of the Hamming seven-four code. In general, a code with minimum distance d-min can correct up to the floor of d-min minus one divided by two bit errors. Two-dimensional parity has a minimum distance of four, allowing it to detect three-bit errors and correct single-bit errors.

**Question 17: What is the Hamming seven-four code, and how does it correct one-bit errors?**

The Hamming seven-four code is a specific error-correcting code that takes four data bits and adds three parity bits to produce a seven-bit codeword. The three parity bits, denoted P1, P2, and P3, are computed as XOR combinations of specific subsets of the data bits D1 through D4. For example, P1 might be the XOR of D1, D3, and D4. At the receiver, the parity checks are recomputed, and the pattern of which checks fail forms a binary number that indicates the position of the corrupted bit. If all parity checks pass, there is no error. If P1 and P2 fail but P3 passes, for instance, the binary pattern indicates that the error is in a specific data bit. The receiver then flips that bit to correct it. The Hamming seven-four code has a minimum distance of three, which means it can detect two-bit errors and correct single-bit errors. This is a concrete example of forward error correction in action.