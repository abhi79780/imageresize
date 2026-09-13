import Link from 'next/link';

export const metadata={title:'Contact Image Resizer Tools',description:'Contact Image Resizer Tools for bug reports, feedback, suggestions and technical questions.'};

export default function Contact(){return <main className="toolPage"><div className="container content"><div className="crumb"><Link href="/">Home</Link> <span>›</span> Contact</div><h1>Contact Image Resizer Tools</h1><p>Contact us about bug reports, feedback, tool suggestions, questions or technical issues.</p><h2>Send a message</h2><p>Have a question, found a bug, or have a suggestion? We'd love to hear from you. Send us an email and we'll get back to you.</p><p><a className="button primary" href="mailto:contact.imageresizertool@gmail.com">Email contact.imageresizertool@gmail.com</a></p></div></main>}
