---
layout: partials/shared/expendable-text-box
extra:
  - extra.md
title: elections
readMoreButton: read more
readLessButton: read less
border: true
---

The election contract connects the delegation contract with the committee, guardians registration and certification contracts. In addition, the election contract implements the voting logic both for voteUnready and voteOut and manages the node state machine notification readyForCommittee and readyToSynct. Upon a notification from the delegation contract, the elections contract calculates the participant's new effective stake and updates the committee contract.