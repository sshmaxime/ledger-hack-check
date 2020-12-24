# ledger-hack-check

> Disclaimer: I've downloaded the initial leaked data in the solely purpose to create this tool. I'm keeping the dataset for few days - just in case I made a mistake in my tool that would require me to redo some parts.

### Check if your personal data has been leaked by ledger.

So as you all know Ledger database got leaked all over the place. My email has been leaked too. Fortunately for me, AFAIK nothing else has been leaked on my side.

However, if I understood well 2 parts of the database were hacked. The first one was 1 million emails - the one I'm part of. But the second part - which is the worst - contains more that 270k emails along with names, surnames, physical addresses (where you ordered your ledger) and phone numbers.

Hence I created a tool for people to know if their personal are out there inside that second part leak.

All leaked emails have been SHA256 and can be found in the `hashed_ledger_hack.ts` file under `app/src`. No other data is available inside this repository - I thought about crypting additional data (phone number, address, name, surname) and uncrypting it using the email hash but it first end up being a huge file and second being not really secure as it could be a way for bad intentioned people to retrieve someone's personnal info with an email.

> The site might be a bit slow and that's normal. I didn't want to use a server or anything, hence everything is stored inside the frontend build - including the 250k+ lines file.

> Some emails were registered several times.

**If you need precision on your data I can let you know about it at @ maximeauba@gmail.com**
