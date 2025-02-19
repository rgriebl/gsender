import { useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import Page from 'app/components/Page';
import AddNewProfile from 'app/features/Gamepad/AddNewProfile';
import ProfileCard from 'app/features/Gamepad/ProfileCard';

export const Route = createLazyFileRoute('/gamepad/')({
    component: GamepadPage,
});

function GamepadPage() {
    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: 'Gamepad 1',
        },
        {
            id: 2,
            name: 'Gamepad 2',
        },
        {
            id: 3,
            name: 'Gamepad 3',
        },
    ]);

    return (
        <Page
            title="Gamepad Profiles"
            withGoBackButton
            description="Manage your gamepad profiles here"
        >
            <div className="flex flex-col gap-4">
                <div>
                    <AddNewProfile />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
                    {profiles.map((profile) => (
                        <ProfileCard
                            key={profile.id}
                            title={profile.name}
                            link={`/gamepad/${profile.id}`}
                        />
                    ))}
                </div>
            </div>
        </Page>
    );
}
