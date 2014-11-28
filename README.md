intobuffer
==========

Puts a decimal number to a fixed length buffer

Length is optimal

## Installation

```
npm install intobuffer
```

## Usage

```
var intobuffer = require('intobuffer')

// to put a number to a 4 byte long Buffer 

intobuffer(3154, 4) // <Buffer 00 00 0c 52>

// try to overflow a buffer, it just fills

intobuffer(315400000000, 4) // <Buffer ff ff ff ff>

// skip byte length

intobuffer(3154) // <Buffer 0c 52>
intobuffer(315400000000) // <Buffer 07 57 ee 35 00>

```