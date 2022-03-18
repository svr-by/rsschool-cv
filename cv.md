# Siarhei Rachkouski

## Contacts
* Location: Mogilev, Belarus
* Phone: +375 (29) 246-18-55
* Email: siarhei.by@gmail.com
* Discord: Sergei(@svr-by)

## About me
I am an engineer by education and by vocation. I have enjoyed writing code since high school. Unfortunately I haven't been working in a IT field yet. But I have gained invaluable experience in business, procurement, logistics and marketing. Undoubtedly, these skills will help me in my future career. I am attentive to details, assiduous, executive and easily trained.

## Skills
* HTML & CSS
* JavaScript 
* Git
* Photoshop

## Code example
```
let n = prompt("Input max number",10);
let message = null;

for(i=2;i<=n;i++) {
    let check = 0;
	for(j=2;j<i;j++) {
        if (i%j == 0) {
          check = 1;
        }
    }
    if (check == 0) {
    	if (message == null) {
      	message = (i);
      } else
    	message = (message + `, ${i}`);
  }
}

alert(message);
```