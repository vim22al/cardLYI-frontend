import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { ScanLine, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const signupSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})

type SignupFormValues = z.infer<typeof signupSchema>

export const Route = createFileRoute('/auth/signup')({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (data: SignupFormValues) => {
        // This will be connected to the auth store later
        console.log('Signup data:', data)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        navigate({ to: '/dashboard' })
    }

    return (
        <div className="flex min-h-screen w-full flex-col lg:flex-row bg-background">
            {/* Left Panel - Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-lagoon-deep p-12 flex-col justify-between text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#4fb8b2] blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#2f6a4a] blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex items-center gap-2"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4fb8b2] shadow-lg shadow-[#4fb8b2]/20">
                        <ScanLine className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white font-sans">CardLYI</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 max-w-md"
                >
                    <h1 className="text-5xl font-bold font-sans leading-tight mb-6">
                        Join the Modern <span className="text-[#4fb8b2]">Networking</span> Revolution
                    </h1>
                    <p className="text-lg text-white/80 leading-relaxed font-sans">
                        Start scanning cards and growing your network in seconds. Simple, fast, and organized.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative z-10 text-sm text-white/60 font-sans"
                >
                    © 2024 CardLYI. All rights reserved.
                </motion.div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex flex-1 items-center justify-center p-6 sm:py-12 relative bg-background">
                {/* Subtle background glow for dark mode */}
                <div className="absolute inset-0 dark:block hidden opacity-20 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#4fb8b2] blur-[150px] rounded-full opacity-10" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md relative z-10"
                >
                    <Card className="border-border shadow-2xl shadow-primary/5 bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                        <CardHeader className="space-y-1 pb-6">
                            <div className="flex lg:hidden items-center gap-2 mb-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4fb8b2]">
                                    <ScanLine className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-foreground font-sans">CardLYI</span>
                            </div>
                            <CardTitle className="text-2xl font-bold tracking-tight text-foreground font-sans">Create an account</CardTitle>
                            <CardDescription className="text-muted-foreground font-sans">
                                Join thousands of professionals using CardLYI
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button
                                variant="outline"
                                className="w-full h-11 font-sans border-border hover:bg-accent transition-colors gap-2 rounded-xl"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Sign up with Google
                            </Button>

                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <Separator className="w-full" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-card px-2 text-muted-foreground font-sans">Or join with email</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="font-sans text-foreground/80">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        placeholder="John Doe"
                                        className={`h-11 font-sans bg-accent/30 border-border focus:ring-[#4fb8b2] rounded-xl ${errors.fullName ? 'border-red-500' : ''}`}
                                        {...register('fullName')}
                                    />
                                    {errors.fullName && (
                                        <p className="text-xs text-red-500 font-sans">{errors.fullName.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-sans text-foreground/80">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className={`h-11 font-sans bg-accent/30 border-border focus:ring-[#4fb8b2] rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                                        {...register('email')}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-500 font-sans">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="font-sans text-foreground/80">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            className={`h-11 font-sans bg-accent/30 border-border focus:ring-[#4fb8b2] rounded-xl ${errors.password ? 'border-red-500' : ''}`}
                                            {...register('password')}
                                        />
                                        {errors.password && (
                                            <p className="text-xs text-red-500 font-sans">{errors.password.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword" className="font-sans text-foreground/80">Confirm</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            className={`h-11 font-sans bg-accent/30 border-border focus:ring-[#4fb8b2] rounded-xl ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                            {...register('confirmPassword')}
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-xs text-red-500 font-sans">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-11 bg-[#4fb8b2] hover:bg-lagoon-deep text-white font-sans font-bold shadow-lg shadow-lagoon/20 transition-all active:scale-[0.98] mt-2 group rounded-xl border-none"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            Creating account...
                                        </div>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Create Account <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4 pb-8">
                            <p className="text-sm text-center text-muted-foreground font-sans">
                                Already have an account?{' '}
                                <Link
                                    to="/auth/login"
                                    className="text-[#4fb8b2] hover:text-[#328f97] font-bold transition-colors"
                                >
                                    Log in
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
