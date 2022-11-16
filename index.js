const {deterministicPartitionKey} = require("./dpk");
// const crypto = require("crypto");

console.log(deterministicPartitionKey());

// const key = "aksfhkasdnfkaesdf;aosdCvolkasvjailsjdknvsfnaslvbnlasedhvoaslbndvliasfbodzslkejnvzlsiDjvszldfibhlaksgnzxdfkivsjfrbnujnaszsxklfjvbnzldfkbhzsjknv;lrjbvnzl bdclzkbnzdslivjnZs…∂¬vhbzksdj bzsjdvkzvnd¬,j bzj,vdnbx jkxzdnfvkjzdnkf kjhzxjbnvkzjshknfbkzdsjnf kxdjfnbzdkjd";

// console.log(deterministicPartitionKey(key));
// console.log(deterministicPartitionKey({partitionKey: key}));
// console.log(deterministicPartitionKey("shortkey"));
// const data = JSON.stringify("shortkey");
// const candi = crypto.createHash("sha3-512").update(data).digest("hex");
// console.log(candi);
// console.log(deterministicPartitionKey({awildkeyappears: "a wild key value appears"}));
// const data2 = JSON.stringify({awildkeyappears: "a wild key value appears"});
// const candi2 = crypto.createHash("sha3-512").update(data2).digest("hex");
// console.log(candi2);
// const data3 = JSON.stringify("a wild value appears");
// const candi3 = crypto.createHash("sha3-512").update(data3).digest("hex");
// console.log(data3);

// console.log(deterministicPartitionKey({partitionKey: "shortkey"}));

//* if input is a value or variable (with NO partitionKey), the value or variable is hashed and returned as a string.
//* if input is an object with a key of partitionKey whose value has a greater character length than MAX_PARTITION_KEY_LENGTH, the value will be hashed and returned as a string.
//* if input is an object with a key of partitionKey whose value has a character length less than MAX_PARTITION_KEY_LENGTH, the value will be returned as a string.

// console.log("----");

// console.log(deterministicPartitionKey(1));
// const data = JSON.stringify(1);
// const candi = crypto.createHash("sha3-512").update(data).digest("hex");
// console.log(candi);


// console.log("----");

// const eventWithStringKey = {
//     partitionKey: "hello"
// };

// const eventWithIntKey = {
//     partitionKey: 1234
// };

// const eventWithNoPartitionKey = {
//     spotify: "Maldevera",
//     genre: "Death-Thrash Metal"
// };

// const eventWithObjKey = {
//     partitionKey: {
//         hello: "world"
//     }
// };

// console.log(deterministicPartitionKey(eventWithStringKey));

// console.log("----");

// console.log(deterministicPartitionKey(eventWithIntKey));

// console.log("----");

// console.log(deterministicPartitionKey(eventWithNoPartitionKey));

// console.log("----");

// console.log(deterministicPartitionKey(eventWithObjKey));

// console.log(deterministicPartitionKey("inb4"));
// const thing = "inb4";
// console.log(deterministicPartitionKey(thing));
