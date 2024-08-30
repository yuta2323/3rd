document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトのフォーム送信を防ぐ

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    const feedbackData = {
        name: name,
        email: email,
        comments: comments
    };

    // ここでサーバーにデータを送信する処理を追加
    fetch('https://example.com/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => response.json())
    .then(data => {
        alert('ご意見の送信が完了しました。');
        document.getElementById('feedback-form').reset(); // フォームをリセット
    })
    .catch(error => {
        alert('送信中にエラーが発生しました。');
    });
});
