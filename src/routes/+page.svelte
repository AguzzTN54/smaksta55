<script>
	import Links from '$lib/components/Links.svelte';
	import { fade } from 'svelte/transition';
	let contentWidth;
</script>

<div
	class="theme"
	bind:clientWidth={contentWidth}
	style="--width:{contentWidth}px"
	in:fade={{ duration: 500, delay: 500 }}
	out:fade={{ duration: 500 }}
>
	<div class="content">
		<div>
			<span class="undangan">
				Undangan bagi seluruh ALUMNI SMA Katolik Santo Thomas Aquino Tulungagung
			</span>
			<h1 class="text-stroke">Smaksta</h1>
			<h2 class="text-stroke">Culture <span>Festival</span></h2>
		</div>

		<button class="date">
			Sabtu, 28 Januari
			<span>2023</span>
		</button>
	</div>
	<div class="links">
		<a
			href="https://docs.google.com/forms/d/1sTb9gQRgvTa101MSU1_nuEsMU7rbyzvMBEu928rKoQA"
			target="_blank"
			rel="noreferrer"
			class="join"
		>
			Gabung Whitelist
		</a>

		<Links />
	</div>
</div>

<style>
	.theme {
		width: 45%;
		height: fit-content;
		text-align: center;
		position: absolute;
		right: 50%;
		top: 50%;
		transform: translate(50%, -50%);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.undangan {
		font-weight: 800;
		font-size: 100%;
	}

	:global(.landscape) .theme .undangan {
		font-size: 80%;
	}

	h1 {
		font-family: var(--font-logo);
		font-size: calc(0.25 * var(--width));
		line-height: 100%;
		font-weight: 400;
		padding: 0;
		margin: 0;
		letter-spacing: -0.3rem;
	}

	h2 {
		font-family: var(--font-logo);
		font-weight: 400;
		line-height: 100%;
		margin: 0;
		font-size: calc(0.1 * var(--width));
	}
	h2 span {
		color: var(--color-third);
	}

	.date {
		background-color: var(--color-secondary);
		border: 0.2rem solid var(--color-primary);
		color: var(--color-primary);
		padding: 2% 10%;
		margin-top: 3%;
		display: inline-block;
		border-radius: 10rem;
		text-transform: uppercase;
		font-size: calc(0.03 * var(--width));
		letter-spacing: 0.3rem;
		font-weight: 700;
	}

	.date span {
		font-size: calc(0.045 * var(--width));
		display: block;
	}

	.links {
		margin-top: 10%;
	}

	.join {
		border: 3px solid var(--color-secondary);
		border-radius: 10rem;
		padding: 2% 10%;
		text-transform: uppercase;
		font-size: 100%;
		color: var(--color-secondary);
		background-color: var(--color-primary);
		text-decoration: none;
		line-height: 100%;
		transition: all 0.3s;
	}

	.join:hover {
		background-color: var(--color-secondary);
		color: var(--color-primary);
	}
	:global(.landscape) .theme {
		width: calc(0.4 * var(--screenWidth));
	}

	@media all and (max-width: 1300px) {
		.theme {
			width: 60%;
		}
	}
	@media all and (max-width: 1000px) {
		:global(main:not(.landscape)) .theme {
			width: 70%;
			top: 40%;
		}

		:global(main:not(.landscape)) .content {
			flex-direction: column-reverse;
		}

		:global(main:not(.landscape)) .date span {
			display: inline-block;
			font-size: unset;
		}

		:global(main:not(.landscape)) .date {
			margin-bottom: 2%;
		}
	}

	@media all and (max-width: 700px) {
		.undangan {
			font-size: 1.1rem;
		}
		.theme {
			width: 90% !important;
		}
	}
	@media all and (min-width: 700px) {
		.links {
			display: none;
		}
	}
</style>
