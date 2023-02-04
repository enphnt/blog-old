---
path: "/googling"
date: "2021-10-07T10:16:53.962Z"
title: "Dev Googling: 3 levels of searching"
---

Love them or hate them, the Google gang is now a fact of modern life. Whether you need to know what time it is in Antarctica or you're searching for how to overcome some error encountered for the first time, Google is a powerful tool to leverage.

<div class="note">
  <strong>Fun Fact:</strong> In its infancy, Google search was originally called BackRub. This is thought to be an ode to the <a target="_blank" href="https://en.wikipedia.org/wiki/Backlink">backlink</a> retrieval concept of the system. So next time you search, enjoy the free massage.
</div>

#### But are you doing it right?

When it comes to finding the more obscure, sometimes the search results can be like a haystack with no needle in sight. To make life easier, the following tips should help you home in on exactly what you're looking for.

### Lvl 1 - Script kid
You've probably seen these if you are using google for work in any capacity. Just noting down those that are usually the most useful and straightforward to use.

#### 1. Exact Match with "Double Quotes"
Use quotation marks to search for something exactly.

Search `"Frank Foster"` to get results which contain both the first and last name of this amazing jazz saxophonist.

This can be extended to other terms to. In this case, it appears a country western artist shares the same name. So to find the sax legend, ensure that all search results also contain the term 'jazz':

- ```"Frank Foster" "jazz"```

#### 2. Subtract terms with -minus operator
Exclude terms by putting a minus (or dash, `-`) in front.

If you wanted to find out who wrote "Breakfast of Champions" (a great read btw), you will get lots of cereal related results, particularly the awful bland flakes called Wheaties.

To remove the flakes, try:

- ```breakfast of champions -wheaties```

#### 3. File extension filtering with 'filetype:'
Get results that are a specified filetype.

If you're on the hunt for a specific PDF file you know exists, you could do something like: `president tax returns filetype:pdf`.

Or perhaps you're after an animated image:

- ```side eye monkey filetype:gif```

### Lvl 2 - Junior Dev
At this level, we get deeper into the operators we can use. These are commonly known but ultimately that's due to their utility.

#### 4. Results only from this 'site:'
Use this to get results only from a specified website.

Quick example:

- ```us audio interface site:drummersdream.com.au```

#### 5. This OR that with the | operator
For situations where you want to search several things simultaneously.

For example, what if you have 2 favorite coffees and you want to look at results for both:

- ```Vizcaya Guatemala coffee beans | Deri Kocha Ethiopia coffee beans```

#### 6. Search a range of..numbers or price range
Put `..` to search for a range of numbers. This can be combined with `$` to search a price range.

Looking for a new metronome thats within your budget? Try:

- ```metronome $25..$55```

#### 7. Filter results by 'imagesize:widthxheight'
Following your search term/s, add the text `imagesize:widthxheight`. Dimensions can be specified in pixels.

For example, if you want your Nick Cage imgs for the desktop try something like:

- ```nick cage imagesize:1920x1080```

#### 8. Use asterisk (`*`) for wildcard search
Wherever you place the * character it will serve as a wildcard and match any phrase or word. It's actually more useful to review search autocompletion results when you want to find some missing part of your search.

For example, you could use it to see what things you could do with javascript:
<div style="text-align:center">
  <img src="images/google-asterisk.png" alt="google-asterisk" width="500px">
</div>

### Lvl 3 - Senior Dev

#### 9. Check latest Googlebot indexes using `cache:`
Let's say you have a website that you can't access server logs for but you want to see  the last time Googlebot hit the page.

Simply search for the page or URL and add the `cache:` prefix, for example:

- ```cache:https://enphnt.github.io```

This will redirect you to the most recent cache of the HTML page. Importantly, Javascript is not included in the cache as its just a cache of plain HTML only.

#### 10. Identify insecure pages for a `site:`
These days, HTTPS is reportedly everywhere but unfortunately, some outdated areas of many major websites are still insecure. We can use a combo of `site:` operator and an inverse `inUrl:` search to display all the pages whose URL doesn't contain `https` for a given domain.

For example, let's inspect `guitarcenter.com`:
<div style="text-align:center">
  <img src="images/google-guitarcenter.png" alt="google-guitarcenter" width="500px">
</div>

Ooops... Looks like around ~1500 pages of `guitarcenter.com` remain insecure. They seem to be all within the 'drumoffdev' subdomain which appears to be items for sale in Japan.

Clicking any of the resulting links reveals that the page is actually non-existent. So ultimately, there appears to be a google search indexing issue with these old listings.

#### 11. Find those who steal from you!
So you have a blog and you just crafted some amazing informative post but you're afraid others may copy your work. Well, aside from feeling flattered, if you want to identify websites that are repurposing your content, you can!

For example, let's see if anyone has copied this very article elsewhere on the net using the title:

- ```intitle:"Dev Googling" -site:enphnt.github.io```

Notice that I've ignored my own site and have just targeted a portion of the page title. This is because not many result exist for this title portion.

I reviewed the results and it appears no one is copying me...yet! I actually notice that my pages here are not being properly indexed. As a result, in a future blog version, I'll be configuring SEO using gatsby's official support strategy. More on that to come.

# Conclusion
These tools are all reasonably reliable in my testing. Without them, this info would largely remain hidden and inaccessible. In future, I see these operators, or at least their principles, becoming more important. ChatGPT has highlighted that we will have to carefully craft our questions in requesting information from AI resources else we will get clumsy answers in return. As the saying goes, 'garbage in, garbage out'.

I hope some of these are useful for hunting that next thing you need to know and reduce some of the garbage that Google search throws at us.

<div style="text-align:center">
  <img src="images/google-oscar.png" alt="thanks-google" width="500px">
</div>