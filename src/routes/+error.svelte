<script>
	import { page } from '$app/stores';
</script>

<section>
	<h1>{$page.status}</h1>
	<h2>Tidak ada Content di halaman ini</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		width: 100%;
		height: 100%;
	}

	h1 {
		font-family: var(--font-logo);
		font-size: calc(0.08 * var(--screenWidth));
		line-height: 0;
	}

	h2 {
		text-transform: uppercase;
		font-size: 100%;
	}
</style>
