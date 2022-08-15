import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";
import {ResidentialSVG} from "./residentialSVG";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const item = {
    title: 'Onsite Renewable Energy Generation',
    introSummary: 'The following requirement applies to new buildings and some extensions with a favourable aspect.',
    introText: 'Generating renewable energy onsite improves energy resilience and reduces fuel prices for occupiers. Onsite energy generation will also help reduce energy demand from the national grid, allowing more energy to be used to support the transition to electric vehicles and heat pumps, both of which are important elements of the UK decarbonisation strategy.',
    require: [
        'For major and minor planning applications, adopted JLP policy DEV32.5 will apply to secure an equivalent 20% carbon saving through onsite renewable energy generation.',
        'The baseline Target Emissions Rate (TER) will be calculated using the most up-to-date version of SAP10 (or other versions of SAP should SAP10 be superseded). This is to ensure the latest carbon factors are used, creating both a robust baseline for the proposal, and to calculate the most accurate carbon savings from renewable energy generation.'
    ],
    requireExpansions: [
        'Extensions that benefit from favourable conditions to support roof mounted solar photovoltaic (PV) panels, and where the host building does not already generate renewable energy onsite, should include a rooftop PV system of a minimum installed capacity of 1 kWp.'
    ],
    further: [
        {
            text: 'Building Regulation Approved Document Part L has been updated in December 2021 and introduced in June 2022, and this introduces higher standards of thermal efficiency for buildings. As such, it is appropriate to ensure that the DEV32.5 20% carbon reduction requirement is only secured through onsite renewable energy generation, with no mechanism to count alternative savings through a fabric first approach (as this has already been incorporated into the 2021 Part L uplift).',
        },
        {
            text: 'Favourable conditions for extensions include no overshading of the proposed roof, with the roof having an easterly, southerly or westerly aspect. A 1 kWp is likely to comprise of at least 4 solar PV panels.'
        },
        {
            text: 'Approved Document Part L 2021',
            link: 'https://www.gov.uk/government/publications/conservation-of-fuel-and-power-approved-document-l'
        },
        {
            text: 'Energy Saving Trust guide to solar panels',
            link: 'https://energysavingtrust.org.uk/advice/solar-panels/'
        },
        {
            text: 'The Renewable Energy Hub',
            link: 'https://www.renewableenergyhub.co.uk/'
        }
    ]
}

export const BuildingPages = () => {
    return (
        <Container maxWidth={'xl'}>
            <Typography variant={'h2'} sx={{ textAlign: 'center', my: 10}}>
                Guidance for Residential Buildings
            </Typography>
            <Box sx={{ display: 'flex'}}>
                <Box sx={{ flex: 2, p: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', pb: 2 }}>{item.title}</Typography>
                    <Typography sx={{ fontStyle: 'italic ', pb: 1}}>{item.introSummary}</Typography>
                    <Typography>{item.introText}</Typography>
                </Box>
                <Box sx={{ flex: 3, p: 2 }}>
                    <ResidentialSVG />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="require"
                            id="require"
                        >
                            <Typography sx={{ fontWeight: 'bold '}}>What we Require</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.require.map((text, i) => (
                                <Typography key={i} sx={{ pb: 1}}>
                                    {text}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box sx={{ flex: 2, p: 2 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="info"
                            id="info"
                        >
                            <Typography sx={{ fontWeight: 'bold '}}>Further Information and Links</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p> test</p>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Container>
    )
}


const InfoLinks = ({text}) => {
    return (
        <Typography sx={{ pb: 1 }}>
            {text}
        </Typography>
    )
}