import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ScanLine, Upload, Camera, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const Route = createFileRoute('/_app/scan')({
  component: ScanPage,
})

function ScanPage() {
  const navigate = useNavigate()
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = async () => {
    setIsScanning(true)
    // Mocking the AI extraction process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsScanning(false)
    navigate({ to: '/extracted' })
  }

  if (isScanning) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-4 border-[#4fb8b2]/20 border-t-[#4fb8b2] animate-spin" />
          <ScanLine className="h-10 w-10 text-[#4fb8b2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground font-sans">AI is Extracting Data...</h2>
          <p className="text-muted-foreground font-sans">Wait a moment while we process the business card details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Scan New Card</h1>
        <p className="text-muted-foreground font-sans">Upload an image or use your camera to scan a business card.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mt-8">
        <div 
          onClick={handleScan}
          className="bg-card p-10 rounded-3xl border-2 border-dashed border-[#4fb8b2]/20 hover:border-[#4fb8b2] hover:bg-[#4fb8b2]/5 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
        >
          <div className="h-20 w-20 rounded-2xl bg-[#4fb8b2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Upload className="h-10 w-10 text-[#4fb8b2]" />
          </div>
          <h3 className="text-xl font-bold text-foreground font-sans">Upload Image</h3>
          <p className="text-sm text-muted-foreground font-sans mt-2 max-w-[240px]">
            Drag and drop your card image here, or click to browse files.
          </p>
          <Button variant="outline" className="mt-8 border-[#4fb8b2] text-[#4fb8b2] hover:bg-[#4fb8b2] hover:text-white rounded-xl px-8 pointer-events-none transition-all">
            Select File
          </Button>
        </div>

        <div 
          onClick={handleScan}
          className="bg-card p-10 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:shadow-md transition-all"
        >
          <div className="h-20 w-20 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Camera className="h-10 w-10 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground font-sans">Use Camera</h3>
          <p className="text-sm text-muted-foreground font-sans mt-2 max-w-[240px]">
            Take a live photo of a business card using your device's camera.
          </p>
          <Button className="mt-8 bg-[#173a40] dark:bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl px-8 shadow-lg shadow-[#173a40]/10 pointer-events-none transition-all">
            Open Camera
          </Button>
        </div>
      </div>

      <div className="bg-[#4fb8b2]/10 p-6 rounded-2xl border border-[#4fb8b2]/10 flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-card flex items-center justify-center shrink-0 shadow-sm text-[#4fb8b2]">
          <ScanLine className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-foreground font-sans">AI Extraction Tip</h4>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            For best results, ensure the card is well-lit and all text is clearly visible. Our AI works best with standard horizontal or vertical layouts.
          </p>
        </div>
      </div>
    </div>
  )
}
