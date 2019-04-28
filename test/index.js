const Meed  = require("../dist/meed")
const fetch = require("node-fetch")
const to    = require("await-to-js").default

const feed = new Meed({ fetch })

;(async () => {
  const [err, user] = await to(feed.user("caden"))
  if (err) console.log(err)
  console.log(user)
})()

;(async () => {
  const [err, topic] = await to(feed.topic("technology"))
  if (err) console.log(err)
  console.log(topic)
})()

;(async () => {
  const [err, tag] = await to(feed.tag("javascript"))
  if (err) console.log(err)
  console.log(tag)
})()
