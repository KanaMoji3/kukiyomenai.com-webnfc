// script.js
const writeButton = document.getElementById('writeButton');
writeButton.addEventListener('click', async () => {
    const cardStatus = document.getElementById('cardStatus');
    const url = document.getElementById('urlWriteID').value;
    try {
        const ndef = new NDEFReader();
        await ndef.scan();
        await ndef.write({
            records: [{ recordType: "url", data: url }]
        });
        // URLの形式はhttps://から書き始める必要がある。　例：https://www.google.com
        cardStatus.textContent = 'カードの状態：未検出';
    } catch (e) {
        cardStatus.textContent = 'カードの状態：エラー';
    }
});