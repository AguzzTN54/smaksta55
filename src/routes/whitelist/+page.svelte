<script>
	import { fade } from 'svelte/transition';
	import { whiteList } from '$lib/helpers/whitelist';
	import LoaderIcon from '$lib/components/Loader-Icon.svelte';
	import Links from '$lib/components/Links.svelte';
</script>

<section in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Daftar Alumni 2018 yang akan datang pada HUT SMAKSTA ke 55</h1>

	<div class="content">
		{#await whiteList()}
			<div class="loading" out:fade={{ duration: 500 }}>
				<LoaderIcon dark />
			</div>
		{:then data}
			<div class="list" in:fade={{ duration: 500 }}>
				<div class="row head">
					<div class="cell cell1">No</div>
					<div class="cell2 cell">Nama</div>
				</div>
				{#each data as { nama }, i}
					<div class="row">
						<div class="cell cell1">{i + 1}</div>
						<div class="cell cell2">{nama}</div>
					</div>
				{/each}
			</div>
		{/await}
		<Links />
	</div>
</section>

<style>
	section {
		width: 700px;
		height: 100%;
		margin: -2% auto 0;
		max-width: 95%;
	}

	.content {
		overflow-y: auto;
		height: 50%;
		border-radius: 1rem;
	}

	.loading {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.row {
		display: flex;
		background-color: rgba(229, 220, 202, 0.8);
		padding: 3% 5%;
		border: solid rgba(85, 51, 39, 0.4);
		border-width: 0 0 1px 0;
	}

	.row.head {
		position: sticky;
		background-color: #e5dcca;
		top: 0;
		left: 0;
	}

	.cell1 {
		width: 8%;
	}
	.row:not(.head) .cell2 {
		text-transform: uppercase;
	}
</style>
