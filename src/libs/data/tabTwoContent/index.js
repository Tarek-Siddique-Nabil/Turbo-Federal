export const exampleOneDialogue = [
  {
    user: "Verify the identity of the individual with fingerprint ID F12345.",
    assistant:
      "The fingerprint ID F12345 belongs to John Doe, born on January 1, 1980. Would you like to access more details about him?",
  },
  {
    user: "Yes, let's do a criminal background check on John Doe.",
    assistant:
      "Sure, performing a criminal background check on John Doe. Please wait....John Doe has no criminal record. Would you like to check another database or perform other actions?",
  },
  {
    user: "Does he have any driving violations?",
    assistant:
      "Let me check the DMV records for John Doe. This may take a few moments...John Doe has one speeding citation from 2 years ago. Would you like to know about his driving record in other states as well, or need information on something else?",
  },
  {
    user: "No, that's fine. Can you pull up recent addresses for John Doe?",
    assistant:
      "Accessing the recent address history for John Doe. I found three addresses associated with him in the past five years. [Displays addresses]. Would you like to know anything else or any other tasks you’d like assistance with?",
  },
];
export const exampleTwoDialogue = [
  {
    user: "Can you compile a list of known associates for a person named Robert Jackson?",
    assistant:
      "Sure, I'll start by identifying all case files linked to Robert Jackson in [XYZ] and [ABC] systems.",
  },
  {
    // user: "Yes, let's do a criminal background check on John Doe",
    assistant:
      "I found 5 cases involving Robert Jackson, involving XYZ Case ID 6789, ABC Case ID 8765, and the like.",
  },
  {
    // user: "Does he have any driving violations?",
    assistant: "Digging into the known contacts specified in each case..",
  },
  {
    // user: "No, that's fine. Can you pull up recent addresses for John Doe?",
    assistant:
      "Robert Jackson seems to be associated with the following persons:\n- Jane Doe, a 40-year-old female, contact number is 202-555-0143.",
  },
  {
    user: "Could you align each associate with their respective cases?",
    assistant:
      "Of course.XYZ Case ID 6789: Associated with Jane Doe, 40 years old, female. Contact: 202-555-0143",
  },
  {
    user: "Is our biometric profile for Robert Jackson complete?",
    assistant:
      "Presently, our systems are lacking certain components of Robert Jackson's biometric data from XYZ and ABC, including factors such as fingerprint data, retinal scans etc.",
  },
  {
    user: "Which systems would have these missing biometric elements?",
    assistant: "Let me fetch that information for you.",
  },
  {
    // user: "No, that's fine. Can you pull up recent addresses for John Doe?",
    assistant:
      " The missing items from Mr. Jackson's biometric profile could potentially be found in the following systems: [Displays Systems]",
  },
];
