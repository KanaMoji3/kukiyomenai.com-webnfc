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
        cardStatus.textContent = 'カードの状態：書き込み成功';
    } catch (e) {
        cardStatus.textContent = 'カードの状態：エラー';
    }
});
