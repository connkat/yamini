import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import LinkedInIcon from '../../Icons/LinkedInIcon';
import PawIcon from '../../Icons/PawIcon';
import Section from '../../Layout/Section';

import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.RescueDogLove]: {Icon: PawIcon, srLabel: 'Rescue Dog Love'},
};
const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section
      className="bg-background px-4 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5"
      noPadding
      sectionId={SectionId.Contact}>
      <div className="relative flex min-h-screen sm:h-screen items-center justify-center p-8 lg:px-0">
        <div className="window z-10 h-min sm:max-w-screen-md  sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Contact</div>
          </div>
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
            <h1 className="text-2xl font-bold text-black sm:text-5xl">{headerText}</h1>
            <h2 className="text-base font-bold text-black sm:text-2xl">{description}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="order-2 col-span-1 md:order-1 ">
                <ContactForm />
              </div>
              <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
                <dl className="flex flex-col text-base text-neutral-500 space-y-4">
                  {items.map(({type, text, href}) => {
                    const {Icon, srLabel} = ContactValueMap[type];
                    return (
                      <div key={srLabel}>
                        <dt className="sr-only">{srLabel}</dt>
                        <dd className="flex items-center">
                          <a
                            className={classNames(
                              '-m-2 flex rounded-md p-2 text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                              {'hover:text-white': href},
                            )}
                            href={href}
                            target="_blank">
                            <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5" />
                            <span className="ml-3 text-sm sm:text-base text-left max-w-[150px]">{text}</span>
                          </a>
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-14 flex justify-center">
          <a
            className=" p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <Image alt="double-down" height={40} src={resolveSrc ?? ""} width={40}/>
          </a>
        </div> */}
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
