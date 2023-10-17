import React from 'react'
import { ProfileForm } from './components/profile-form'
import { Separator } from '@/components/ui/separator'
import { AccountForm } from './components/account-form'

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className='grid grid-cols-2 gap-8'>
        <ProfileForm />
        <AccountForm />
      </div>
    </div>
  )
}

export default Profile