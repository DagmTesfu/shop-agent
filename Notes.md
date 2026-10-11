what is a token?
** okens are chunks of text (whole words, pieces of words, punctuation) that get mapped to integer IDs, and those IDs are turned into vectors the model computes with. "Binary numbers" isn't quite it. The key point is that a token is not always a word. "unbelievable" might be 3 tokens, and Amharic text often takes many more tokens than English for the same meaning. That affects cost for Ethiopian businesses.

what is a context window?
** It's the maximum amount of text (in tokens) the model can see at once: your prompt, the conversation so far, tool results, and its own reply. The model doesn't remember your chat. Your app resends the whole history on every call, and if it exceeds the window, older parts get cut or the call fails. This matters a lot for agents, because every tool result fills the window.

why do models hallucinate?
** because they are trained as next-word prediction engines designed to mimic the distribution of their training data, rather than to be factual databases. the model produces plausible text even when it has no real knowledge, and it doesn't "know that it doesn't know." That's why we give agents tools and documents to look things up instead of trusting its memory.

 // How do we train neural networks using the internet or from the internet?
     ** we give the neural network some data at first then using that it would guess what we ask him...neurals use something called weights that's how they label anything we give them so based on the weights they guess what it is...if they are wromg they will improve themselves by using patterns adn impotve themselves from before little bit then again then again untill they get the correct answer.

What are the two main stages of training (pretraining vs. fine-tuning/post-training)?
 ** Pre Training: the model reads a huge amount of internet text and learns to predict the next token. This is where its knowledge comes from. The result is a "base model" that just continues text, like an autocomplete.t, and 
 fine-tuning: the model is trained on conversations and human feedback so it behaves like an assistant that follows instructions and refuses harmful requests.