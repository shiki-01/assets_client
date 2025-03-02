<script lang="ts">
	let file: File | null = null;

	// ファイルをAPIに送信する関数
	const uploadFile = async () => {
		if (!file) {
			alert('ファイルを選択してください');
			return;
		}

		// FormDataオブジェクトを作成
		const formData = new FormData();
		formData.append('file', file); // 'file' はバックエンドで受け取るキー名

		try {
			// APIリクエストを送信
			const response = await fetch(`http://localhost:8787/upload`, {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				const result = await response.json();
				console.log('アップロード成功:', result);
			} else {
				console.error('アップロード失敗:', await response.text());
			}
		} catch (error) {
			console.error('エラーが発生しました:', error);
		}
	};
</script>

<div>
	<input type="file" on:change={(e) => (file = (e.target as HTMLInputElement).files?.[0] || null)} />
	<button on:click={uploadFile}>アップロード</button>
</div>