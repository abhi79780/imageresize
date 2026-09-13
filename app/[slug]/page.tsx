import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ToolWorkspace from '../components/ToolWorkspace';
import AdPlaceholder from '../components/AdPlaceholder';

const tools: Record<string, { name: string; description: string; formats: string; usefulFor: string; tips: string }> = {
  'image-compressor': { name: 'Image Compressor', description: 'Reduce image file size while keeping a useful balance between visual quality and easy sharing.', formats: 'JPG, PNG and WebP', usefulFor: 'Email attachments, website uploads and faster-loading pages.', tips: 'Start with High quality, then move lower only when you need a smaller file.' },
  'image-resizer': { name: 'Image Resizer', description: 'Change image dimensions for websites, social posts, documents and other upload requirements.', formats: 'JPG, PNG and WebP', usefulFor: 'Profile images, thumbnails, banners and fixed-size forms.', tips: 'Keep aspect ratio enabled when you want to avoid stretching faces or objects.' },
  'jpg-to-png': { name: 'JPG to PNG', description: 'Convert a JPG image into the widely supported PNG format in your browser.', formats: 'JPG input, PNG output', usefulFor: 'Graphics that need lossless output or a format commonly used for transparent artwork.', tips: 'Conversion does not restore detail already lost in the original JPG.' },
  'png-to-jpg': { name: 'PNG to JPG', description: 'Convert PNG images into compact JPG files for photos and systems that require JPG.', formats: 'PNG input, JPG output', usefulFor: 'Photo uploads and smaller files where transparency is not needed.', tips: 'JPG cannot preserve transparency, so transparent areas are composited before export.' },
  'webp-to-jpg': { name: 'WebP to JPG', description: 'Turn a WebP image into a broadly compatible JPG file without an account.', formats: 'WebP input, JPG output', usefulFor: 'Legacy upload systems, documents and apps that do not accept WebP.', tips: 'Use a higher quality setting when text or fine detail matters.' },
  'image-cropper': { name: 'Image Cropper', description: 'Trim an image to the area you need and create a cleaner composition.', formats: 'JPG, PNG and WebP', usefulFor: 'Avatars, thumbnails, product images and social media crops.', tips: 'Preview the crop at its final shape before downloading.' },
  'image-to-base64': { name: 'Image to Base64', description: 'Convert a supported image into a Base64 data string for inline HTML, CSS or development work.', formats: 'JPG, PNG and WebP', usefulFor: 'Small icons, prototypes and code examples where an embedded data URL is practical.', tips: 'Base64 makes files larger, so use it selectively rather than for large photos.' },
  'favicon-generator': { name: 'Favicon Generator', description: 'Create a favicon-sized image from your source artwork for a website or prototype.', formats: 'JPG, PNG and WebP input', usefulFor: 'Website tabs, bookmarks and simple web identity experiments.', tips: 'Use a simple, high-contrast source because favicon sizes are small.' }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools[slug];
  if (!tool) return {};
  return { title: `Free ${tool.name} Online`, description: `${tool.description} Free browser-based tool with no signup.` };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools[slug];
  if (!tool) notFound();

  return <main className="toolPage"><div className="container">
    <div className="crumb"><Link href="/">Home</Link> <span>›</span> <Link href="/tools">Image Tools</Link> <span>›</span> {tool.name}</div>
    <h1>{tool.name}</h1><p className="muted">{tool.description} Fast, free and processed in your browser.</p>
    <ToolWorkspace kind={slug}/>
    <AdPlaceholder />
    <div className="content">
      <h2>What {tool.name} does</h2><p>{tool.description} It is designed for people who need a quick result without installing software or creating an account. {tool.usefulFor}</p>
      <h2>How to use this tool</h2><p>Choose a file from your device, adjust the available settings, then process and download the result. The browser handles the supported image operation locally, so the original file remains on your device during normal use.</p>
      <h2>Supported formats and limitations</h2><p>This tool supports {tool.formats}. Results depend on the source image and your device’s available memory. Very large files may take longer or fail in a memory-limited browser. {tool.tips}</p>
      <h2>Helpful tip</h2><p>Keep the original file until you have checked the downloaded result. If a site or form specifies a maximum file size or exact dimensions, use those requirements as your target.</p>
      <h2>Related tools</h2><div className="related">{Object.entries(tools).filter(([s]) => s !== slug).slice(0, 4).map(([s, item]) => <Link className="pill" href={'/' + s} key={s}>{item.name}</Link>)}</div>
    </div>
  </div></main>;
}
