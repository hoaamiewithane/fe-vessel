import { AccountForm } from './components/account-form'
import { ProfileForm } from './components/profile-form'

const Profile = () => {
  return (
    <div className="container space-y-6 py-4">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-8'>
        <div className='border rounded-md p-8 shadow-md'>
          <h3 className="text-lg font-medium mb-4">Your information</h3>
          <ProfileForm />
        </div>
        <div className='border rounded-md p-8 shadow-md'>
          <h3 className="text-lg font-medium mb-4">Change password</h3>
          <AccountForm />
        </div>

      </div>
    </div>
  )
}

export default Profile