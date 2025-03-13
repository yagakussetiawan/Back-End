function groupAnagrams(words) {
let anagramGroups = {};
for (let i = 0; i < words.length; i++) {
let sortedWord = words[i].split("").sort().join("");
if (anagramGroups[sortedWord]) {
anagramGroups[sortedWord].push(words[i]);
let result = [];
for (let key in anagramGroups) {
result.push(anagramGroups[key]);
}