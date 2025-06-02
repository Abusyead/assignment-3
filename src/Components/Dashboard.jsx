import { useState } from 'react';
import { Container } from './Common/Container';
import DashMessage from './Common/DashMessage';
import Heroarea from './Common/Heroarea';

function Dashboard() {
  const [ismessage, setIsMessage] = useState(false);
  const toggleMenu = () => setIsMessage((prev) => !prev);

  return (
    <section>
      <Container className="max-w-[1300px] h-[110vh] relative">
        <Heroarea />
        <div className="absolute bottom-25 right-0 flex flex-col gap-5 items-end">
          {ismessage && <DashMessage />}

            {!ismessage ? (
              <button
                className="font-bebas text-[55.2px] font-normal h-[77px] w-[77px] bg-orange flex items-center justify-center text-white cursor-pointer rounded-full"
                onClick={toggleMenu}
              >
                C
              </button>
            ) : (
              <button
                className="font-bebas text-[55.2px] cursor-pointer font-normal h-[77px] w-[77px] bg-orange flex items-center justify-center text-white rounded-full"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                &times;
              </button>
            )}
        </div>
      </Container>
    </section>
  );
}

export default Dashboard;
