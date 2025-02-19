import { createFileRoute } from '@tanstack/react-router';
import Page from 'app/components/Page';

export const Route = createFileRoute('/gamepad/$gamepadProfileId')({
    component: GamepadProfilePage,
});

function GamepadProfilePage() {
    const { gamepadProfileId } = Route.useParams();

    return (
        <Page title={gamepadProfileId} withGoBackButton>
            Hi from {gamepadProfileId}
        </Page>
    );
}
