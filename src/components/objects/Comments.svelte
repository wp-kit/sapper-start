<div id="comments" class="comments-area default-max-width show-avatars">

	{#if comments.length}

		<h2 class="comments-title">{comments.length} comment{comments.length > 1 ? 's' : ''}</h2>
					
		<ol class="comment-list">
		
			{#each comments.filter(({parent}) => !parent) as comment}
			
				<Comment comment={comment} comments={comments} children={comments.filter(c => c.parent === comment.id)} />
				
			{/each}
			
		</ol>
		
	{/if}

	<div id="respond" class="comment-respond">

		<h2 class="comment-reply-title">Leave a comment</h2>
		
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

</div>

<script>

	import { createComment } from '~/library/api'
	
	import Comment from '~/components/objects/Comment'
	
	import Label from '~/components/elements/Label'
	import Textarea from '~/components/elements/Textarea'
	import Input from '~/components/elements/Input'
	import Button from '~/components/elements/Button'

	export let comments = []
	export let post
	
	const onSubmit = async (e) => {
		
		const form = e.currentTarget
		
		const data = {
			content: form.elements.comment.value,
			author_name: form.elements.name.value,
			author_email: form.elements.email.value,
			author_url: form.elements.website.value,
			post: post.id
		}
		
		try {
		
			const comment = await createComment(data)
			
			comments = comments.concat([comment])
			
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
	