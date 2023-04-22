# Credit-Card-Checker
Codecademy JavaScript Project

Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

## Project Scenario
In this project I assumed a role of a clerk who was tasked with writing a JavaScript programme that checks which credit cards are valid, after my company had reasons to suspect that credit card distributors have been mailing out cards that have invalid numbers. I was given a sample of 15  credit  card  numbers for the programme tests.

## Project Objective
The objective of this project was to put in practice my knowledge of JavaScript functions and loops, to be able to handle checks on multiple cards at the time.

## Code Overview:
1. Helper functions
2. Function Factory
3. Array, (or a list) of thirty organisms likely to survive
4. Tests

#### 1. Helper functions
* returnRandBase() returns a random DNA base 

    <sub>DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').</sub>

* mockUpStrand() returns a single random strand of DNA containing 15 bases

    <sub>for example: ['T', 'G', 'G', 'C', 'T', 'C', 'G', 'C', 'C', 'T', 'A', 'A', 'T', 'G', 'G'].</sub>
    
#### 2. Function Factory 
pAequorFactory() is an Function Factory. The primary focus of the pAequorFactory() is to produce multiple objects, or instances of the *P. aequor* organism. Primarily, the output of the pAequorFactory() incudes:
* *P. aequor* object with a unique number
* *P. aequor* object with a randomly assigned DNA strand with 15 bases

The Object Factory has the following methods which can be called on the pAequorFactory() produced instances of the *P. aequor* organism:
* mutate()
    
    <sub>This method simulates *P. aequor‘s* high rate of mutation (change in its DNA). It randomly selects a base in the object’s dna property and changes the current base to a different base. Then .mutate() will return the object’s mutated dna.</sub>
    
* compareDNA()
    
    <sub> This method takes in another pAequor object as a parameter and compares their DNA sequences. The method compares how many bases are identical and in the same locations. It returns a message which states the percentage of DNA the two objects have in common. </sub>
    
* willLikelySurvive()

    <sub> Only organisms which DNAs consist in 60% of 'C' or 'G' base are likely to survive. willLikelySurvive() returns a boolean (true or false) which indicates whether the orgnism in question is likely to survve.</sub>
    
* complementStrand()

    <sub>This method returns the complementary DNA strand. ('A's swap with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.) For example, an organism with dna ['A', 'T', 'C', 'C', 'T', 'C', 'A', 'G', 'G', 'T', 'G', 'C', 'C', 'T', 'A'] will have a complementary DNA of ['T', 'A', 'G', 'G', 'A', 'G', 'T', 'C', 'C', 'A', 'C', 'G', 'G', 'A', 'T'].</sub>

#### 3. Array, (or a list) of thirty organisms likely to survive
30 instances of the of pAequor that can survive in their natural environment have been pushed to the sampleList variable for the team's research purposes.

#### 4. Tests
A number of tests have been set up on the bottom of the code to be printed to the console and check the functionality of the programme
