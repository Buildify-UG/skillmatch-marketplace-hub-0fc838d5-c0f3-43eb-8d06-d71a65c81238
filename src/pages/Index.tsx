import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wrench, Zap, Hammer, Wind, Droplet, Flame, Palette, Users, CheckCircle, Clock, Star, LogOut } from 'lucide-react';

const Index = () => {
  const [view, setView] = useState('landing');
  const [role, setRole] = useState(null);

  const services = [
    { icon: Droplet, label: 'Plumbing' },
    { icon: Zap, label: 'Electrical' },
    { icon: Hammer, label: 'Carpentry' },
    { icon: Wind, label: 'HVAC' },
    { icon: Wrench, label: 'Appliance Repair' },
    { icon: Flame, label: 'Welding' },
    { icon: Hammer, label: 'Masonry' },
    { icon: Palette, label: 'Painting' },
  ];

  // LANDING PAGE
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">FixAll SkillMatch Hub</h1>\n            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setView('login')}>Login</Button>
              <Button onClick={() => setView('register')}>Get Started</Button>
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-4">Find Trusted Service Providers</h2>
          <p className="text-xl text-muted-foreground mb-8">Connect with verified skilled professionals for all your emergency utility needs</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => { setView('register'); setRole('client'); }}>Post a Job</Button>
            <Button size="lg" variant="outline" onClick={() => { setView('register'); setRole('provider'); }}>Become a Provider</Button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Services We Offer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16 bg-card rounded-xl my-12">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Top-Rated Providers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Juan Dela Cruz', service: 'Plumbing', rating: 4.9, reviews: 142 },
              { name: 'Maria Santos', service: 'Electrical', rating: 4.8, reviews: 98 },
              { name: 'Pedro Reyes', service: 'Carpentry', rating: 4.7, reviews: 76 },
            ].map((p, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={`https://images.unsplash.com/photo-${1507003211169 + i}?w=400&h=400&fit=crop`} alt={p.name} className="w-full h-40 object-cover" />
                <CardContent className="p-4">
                  <h4 className="font-bold text-foreground mb-1">{p.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{p.service}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{p.rating}</span>
                    <span className="text-sm text-muted-foreground">({p.reviews})</span>
                  </div>
                  <Button className="w-full" variant="outline">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16 rounded-xl max-w-6xl mx-auto my-12">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-8 text-lg opacity-90">Join thousands of satisfied customers and providers</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="outline" className="bg-primary-foreground text-primary" onClick={() => { setView('register'); setRole('client'); }}>I Need Services</Button>
              <Button variant="outline" className="text-primary-foreground border-primary-foreground" onClick={() => { setView('register'); setRole('provider'); }}>Offer Services</Button>
            </div>
          </div>
        </section>

        <footer className="bg-foreground/5 border-t border-border py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; 2024 FixAll SkillMatch Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  // LOGIN PAGE
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4"><Wrench className="w-8 h-8 text-primary" /></div>
            <CardTitle>Login to FixAll</CardTitle>
            <CardDescription>Sign in with your email or phone number</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Email or Phone</Label>
              <Input placeholder="you@example.com or +63XXXXXXXXXX" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full" onClick={() => { setView('client'); setRole('client'); }}>Sign In</Button>
            <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-background text-muted-foreground">or</span></div></div>
            <Button variant="outline" className="w-full">Continue with OTP</Button>
            <p className="text-center text-sm text-muted-foreground">Don't have an account? <button className="text-primary font-semibold hover:underline" onClick={() => setView('register')}>Register</button></p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // REGISTRATION PAGE
  if (view === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 p-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Join FixAll SkillMatch Hub</CardTitle>
              <CardDescription>{role === 'client' ? 'Post jobs and find trusted providers' : 'Offer your skills and earn'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue={role || 'client'} onValueChange={(v) => setRole(v)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="client">I Need Services</TabsTrigger>
                  <TabsTrigger value="provider">I Offer Services</TabsTrigger>
                </TabsList>

                <TabsContent value="client" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Full Name</Label><Input placeholder="Juan Dela Cruz" /></div>
                    <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="juan@example.com" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Phone Number</Label><Input placeholder="+63XXXXXXXXXX" /></div>
                    <div className="space-y-2"><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
                  </div>
                  <Button className="w-full" onClick={() => setView('client')}>Create Account</Button>
                </TabsContent>

                <TabsContent value="provider" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Full Name</Label><Input placeholder="Maria Santos" /></div>
                    <div className="space-y-2"><Label>Service Category</Label><select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"><option>Plumbing</option><option>Electrical</option><option>Carpentry</option></select></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="maria@example.com" /></div>
                    <div className="space-y-2"><Label>Phone</Label><Input placeholder="+63XXXXXXXXXX" /></div>
                  </div>
                  <div className="space-y-2"><Label>Upload Certifications</Label><div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary"><p className="text-sm text-muted-foreground">Drag files or click to upload</p></div></div>
                  <Button className="w-full" onClick={() => setView('provider')}>Submit for Approval</Button>
                </TabsContent>
              </Tabs>
              <p className="text-center text-sm text-muted-foreground">Already have an account? <button className="text-primary font-semibold hover:underline" onClick={() => setView('login')}>Login</button></p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // CLIENT DASHBOARD
  if (view === 'client') {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2"><Wrench className="w-6 h-6 text-primary" /><h1 className="text-xl font-bold text-foreground">FixAll - Client Dashboard</h1></div>
            <Button variant="ghost" size="sm" onClick={() => { setView('landing'); setRole(null); }}><LogOut className="w-4 h-4 mr-2" /> Logout</Button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Active Bookings</p><p className="text-3xl font-bold text-foreground">2</p></div><Clock className="w-10 h-10 text-primary opacity-20" /></div></CardContent></Card>
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Completed Jobs</p><p className="text-3xl font-bold text-foreground">12</p></div><CheckCircle className="w-10 h-10 text-green-500 opacity-20" /></div></CardContent></Card>
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Wallet Balance</p><p className="text-3xl font-bold text-foreground">₱5,000</p></div><Users className="w-10 h-10 text-primary opacity-20" /></div></CardContent></Card>
          </div>

          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="providers">Browse Providers</TabsTrigger>
              <TabsTrigger value="post">Post a Job</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <Card><CardHeader><CardTitle>Active & Recent Bookings</CardTitle></CardHeader><CardContent className="space-y-4">
                {[
                  { id: 1, service: 'Leaking Faucet Repair', provider: 'Juan Dela Cruz', date: '2024-01-15', status: 'confirmed', amount: 1500 },
                  { id: 2, service: 'Electrical Outlet Installation', provider: 'Maria Santos', date: '2024-01-18', status: 'pending', amount: 2500 },
                ].map((b) => (
                  <div key={b.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                    <div><p className="font-semibold text-foreground">{b.service}</p><p className="text-sm text-muted-foreground">Provider: {b.provider}</p><p className="text-sm text-muted-foreground">{b.date}</p></div>
                    <div className="text-right"><Badge variant={b.status === 'confirmed' ? 'default' : 'secondary'}>{b.status}</Badge><p className="font-bold text-foreground mt-2">₱{b.amount}</p></div>
                  </div>
                ))}
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="providers">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Juan Dela Cruz', service: 'Plumbing', rating: 4.9, reviews: 142 },
                  { name: 'Maria Santos', service: 'Electrical', rating: 4.8, reviews: 98 },
                  { name: 'Pedro Reyes', service: 'Carpentry', rating: 4.7, reviews: 76 },
                ].map((p, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={`https://images.unsplash.com/photo-${1507003211169 + i}?w=400&h=400&fit=crop`} alt={p.name} className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                      <h4 className="font-bold text-foreground mb-1">{p.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{p.service}</p>
                      <div className="flex items-center gap-1 mb-4"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="font-semibold text-sm">{p.rating}</span><span className="text-xs text-muted-foreground">({p.reviews})</span></div>
                      <Button size="sm" className="w-full">Book Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="post">
              <Card><CardHeader><CardTitle>Post a New Job</CardTitle></CardHeader><CardContent className="space-y-4">
                <div className="space-y-2"><Label>Service Category</Label><select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"><option>Plumbing</option><option>Electrical</option><option>Carpentry</option></select></div>
                <div className="space-y-2"><Label>Job Description</Label><textarea className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground" rows={4} placeholder="Describe your job in detail..."></textarea></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Preferred Date</Label><Input type="date" /></div>
                  <div className="space-y-2"><Label>Budget Range</Label><Input placeholder="₱1,000 - ₱5,000" /></div>
                </div>
                <Button className="w-full">Post Job</Button>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    );
  }

  // PROVIDER DASHBOARD
  if (view === 'provider') {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2"><Wrench className="w-6 h-6 text-primary" /><h1 className="text-xl font-bold text-foreground">FixAll - Provider Dashboard</h1></div>
            <Button variant="ghost" size="sm" onClick={() => { setView('landing'); setRole(null); }}><LogOut className="w-4 h-4 mr-2" /> Logout</Button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Pending Bids</p><p className="text-3xl font-bold text-foreground">5</p></div><Clock className="w-10 h-10 text-secondary opacity-20" /></div></CardContent></Card>
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Accepted Bids</p><p className="text-3xl font-bold text-foreground">8</p></div><CheckCircle className="w-10 h-10 text-green-500 opacity-20" /></div></CardContent></Card>
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">E-Wallet Balance</p><p className="text-3xl font-bold text-foreground">₱12,500</p></div><Users className="w-10 h-10 text-primary opacity-20" /></div></CardContent></Card>
            <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">Rating</p><p className="text-3xl font-bold text-foreground">4.8★</p></div><Star className="w-10 h-10 text-yellow-400 opacity-20" /></div></CardContent></Card>
          </div>

          <Tabs defaultValue="jobs" className="space-y-6">
            <TabsList>
              <TabsTrigger value="jobs">Available Jobs</TabsTrigger>
              <TabsTrigger value="bids">My Bids</TabsTrigger>
              <TabsTrigger value="wallet">E-Wallet</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs">
              <Card><CardHeader><CardTitle>Available Jobs in Your Category</CardTitle></CardHeader><CardContent className="space-y-4">
                {[
                  { id: 1, title: 'Bathroom Pipe Leak', client: 'Maria Garcia', budget: '₱1,500-2,000', date: 'Jan 15, 2024' },
                  { id: 2, title: 'Kitchen Sink Installation', client: 'Robert Tan', budget: '₱2,000-2,500', date: 'Jan 18, 2024' },
                  { id: 3, title: 'Emergency Water Pressure Issue', client: 'Ana Cruz', budget: '₱1,200-1,800', date: 'Jan 20, 2024' },
                ].map((j) => (
                  <div key={j.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                    <div><p className="font-semibold text-foreground">{j.title}</p><p className="text-sm text-muted-foreground">Client: {j.client}</p><p className="text-sm text-muted-foreground">{j.date}</p></div>
                    <div className="text-right"><p className="font-bold text-primary mb-2">{j.budget}</p><Button size="sm">Place Bid</Button></div>
                  </div>
                ))}
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="bids">
              <Card><CardHeader><CardTitle>My Bids & Applications</CardTitle></CardHeader><CardContent className="space-y-4">
                {[
                  { id: 1, jobTitle: 'Bathroom Pipe Leak', client: 'Maria Garcia', amount: 1800, status: 'pending' },
                  { id: 2, jobTitle: 'Kitchen Sink Installation', client: 'Robert Tan', amount: 2200, status: 'accepted' },
                ].map((b) => (
                  <div key={b.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                    <div><p className="font-semibold text-foreground">{b.jobTitle}</p><p className="text-sm text-muted-foreground">Client: {b.client}</p></div>
                    <div className="text-right"><Badge variant={b.status === 'accepted' ? 'default' : 'secondary'}>{b.status}</Badge><p className="font-bold text-foreground mt-2">₱{b.amount}</p></div>
                  </div>
                ))}
              </CardContent></Card>
            </TabsContent>

            <TabsContent value="wallet">
              <div className="grid md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>E-Wallet Balance</CardTitle></CardHeader><CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg"><p className="text-sm opacity-90 mb-2">Current Balance</p><p className="text-4xl font-bold">₱12,500</p></div>
                  <Button className="w-full">Top Up Wallet</Button>
                  <Button variant="outline" className="w-full">Withdraw Funds</Button>
                </CardContent></Card>

                <Card><CardHeader><CardTitle>Recent Transactions</CardTitle></CardHeader><CardContent className="space-y-3">
                  {[
                    { amount: '+₱2,500', desc: 'Job completed - Plumbing' },
                    { amount: '-₱500', desc: 'Platform fee' },
                    { amount: '+₱1,800', desc: 'Bid accepted' },
                  ].map((tx, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border last:border-b-0"><p className="text-sm text-muted-foreground">{tx.desc}</p><p className="font-bold text-foreground">{tx.amount}</p></div>
                  ))}
                </CardContent></Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    );
  }

  return null;
};

export default Index;
