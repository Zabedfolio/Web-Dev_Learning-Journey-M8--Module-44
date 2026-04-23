import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>
            <h2>Hero Page</h2>

            <Button variant='secondary'>Hero Button</Button>
            <Button variant='outline'>Hero Button outline</Button>
            <Button variant='danger'>Hero Button danger</Button>
            <Button variant='danger-soft'>Hero Button danger soft</Button>
        </div>
    );
};

export default HeroPage;