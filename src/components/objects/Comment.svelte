<li id="comment-{comment.id}" class="comment even thread-even depth-{depth}">
	<article id="div-comment-{comment.id}" class="comment-body">
		<footer class="comment-meta">
			<div class="comment-author vcard">
				<img alt="{ comment.author_name }" src="{ comment.author_avatar_urls[96] }" class="avatar avatar-60 photo" height="60" width="60" loading="lazy">						
				<b class="fn">
					<a href="{ comment.author_url }" rel="external nofollow ugc" class="url">{ comment.author_name }</a></b> <span class="says">says:</span>
			</div>

			<div class="comment-metadata">
				<a href="#comment-1">
					<time datetime="{comment.date}">{getNiceDateTime(comment.date)}</time>
				</a> 
			</div>

		</footer>

		<div class="comment-content">
			{#if comment.status === 'approved'}
				{@html comment.content.rendered}
			{:else}
				<i>Your comment is awaiting moderation. This is a preview; your comment will be visible after it has been approved.</i>
			{/if}
		</div>

		<div class="reply">
			<a rel="nofollow" on:click|preventDefault={toggleReply} class="comment-reply-link" href="#comment-{comment.id}" aria-label="Reply to {comment.author_name}">Reply</a>
		</div>	
				
	</article>
	
	{#if children.length}
		
		<ol class="children">
			
			{#each children as child}
			
				<svelte:self comment={child} comments={comments} children={comments.filter(c => c.parent === child.id)} />
				
			{/each}
			
		</ol>
		
	{/if}
	
	{#if reply}
	
		<div id="respond-{comment.id}" class="comment-respond">

			<h2 class="comment-reply-title">Reply to {comment.author_name} <small><a rel="nofollow" href="#comment-{comment.id}" on:click|preventDefault="{() => reply = !reply}">Cancel reply</a></small></h2>
			
			<p>Your email address will not be published. Required fields are marked *</p>
			
			<form method="post" class="comment-form" on:submit|preventDefault={onSubmit}>
			
				<div>
					<Label htmlFor="comment">Comment</Label>
					<Textarea id="comment" name="comment" cols="45" rows="5" maxlength="65525" required />
				</div>
				
				<div>
					<Label htmlFor="name">Name</Label>
					<Input type="text" id="name" name="name" required />
				</div>
				
				<div>
					<Label htmlFor="comment">Email</Label>
					<Input type="email" id="email" name="email" required />
				</div>
				
				<div>
					<Label htmlFor="comment">Website</Label>
					<Input type="url" id="website" name="website" />
				</div>
	
	
				<div>
					<Input type="checkbox" id="save" name="save" />
					<Label htmlFor="save">Save my name, email, and website in this browser for the next time I comment.</Label>
				</div>
				
				
				<Button>Post Comment</Button>
				
				
			</form>	
			
		</div>
		
	{/if}
</li>

<script>

	import { getNiceDateTime, createComment } from '~/library/api'
	
	import Label from '~/components/elements/Label'
	import Textarea from '~/components/elements/Textarea'
	import Input from '~/components/elements/Input'
	import Button from '~/components/elements/Button'

	export let comment = {}
	export let children = []
	export let comments = []
	export let reply = false
	export let depth = 1
	
	const toggleReply = () => {
	
		if(reply) {
			
			reply = false
			
		} else {
			
			reply = true
			
			setTimeout(() => document.getElementById('respond-' + comment.id).scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			}), 0)
			
		}
		
	}
	
	const onSubmit = async (e) => {
		
		const form = e.currentTarget
		
		const data = {
			content: form.elements.comment.value,
			author_name: form.elements.name.value,
			author_email: form.elements.email.value,
			author_url: form.elements.website.value,
			parent: comment.id,
			post: comment.post
		}
		
		try {
		
			const comment = await createComment(data)
			
			children = children.concat([comment])
			
			form.reset()
			
			setTimeout(() => document.getElementById('comment-' + comment.id).scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			}), 0)
			
		} catch(err) {
			
			alert(err)
			
		}
		
	}
	
</script>