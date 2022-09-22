import {Box, Typography} from "@mui/material";

const text = [
    {
        title: 'Active Travel',
        text: ['Active travel simply means making journeys in physically active ways - like walking, wheeling (using a wheelchair or mobility aid), cycling, or scooting. ']
    },
    {
        title: 'Adaptation',
        text: ['Climate change adaptation is the process of adjusting to current or expected climate change and its effects. It is one of the ways to respond to climate change, along with mitigation. ']
    },
    {
        title: 'Air Source Heat Pump',
        text: ['An air source heat pump is a renewable heating system that extracts low-temperature solar energy from the air and compresses this energy into a higher temperature. An air source heat pump provides a building with 100% of its heating and hot water all year round.']
    },
    {
        title: 'Biodiversity',
        text: ['The numbers and relative abundances of different genes (genetic diversity), species, and ecosystems (communities) in a particular area.']
    },
    {
        title: 'Biomass boiler',
        text: ['A heating system that uses natural/non-fossil fuel resources to create heat for use throughout a home or premises.']
    },
    {
        title: 'Brise Soleil',
        text: ['Brise soleil (taken from the French for ‘sun breaker’) is a type of solar shading system that uses a series of horizontal or vertical blades to control the amount of sunlight and solar heat that enters a building. ']
    },
    {
        title: 'Carbon footprint',
        text: ['The amount of carbon an entity of any type (e.g., person, group, vehicle, event, building, corporation) emits into the atmosphere. ']
    },
    {
        title: 'Carbon sink',
        text: ['Anything storing carbon such as trees and other vegetation, forests, oceans and grasslands.']
    },
    {
        title: 'Eaves',
        text: ['The area where a roof extends a small way past the wall of a building is usually referred to as the eaves. Extending the eaves can assist with increasing shade at times when the sun is at its highest. ']
    },
    {
        title: 'Ecosystem ',
        text: ['A system of interacting living organisms together with their physical environment. The boundaries of what could be called an ecosystem are somewhat arbitrary, depending on the focus of interest or study. Thus, the extent of an ecosystem may range from very small spatial scales to, ultimately, the entire Earth. ']
    },
    {
        title: 'Emissions ',
        text: ['In the climate change context, emissions refer to the release of greenhouse gases (primarily carbon) into the atmosphere over a specified area and period of time. ']
    },
    {
        title: 'Embodied carbon',
        text: ['Embodied carbon is the total greenhouse gas (GHG) emissions (often simplified to “carbon”) generated to produce a built asset. This includes emissions caused by extraction,manufacture/processing, transportation and assembly of every product and element in an asset.  ']
    },
    {
        title: 'Extension',
        text: ['An addition to an existing building that, for the purposes of this document, requires planning permission']
    },
    {
        title: 'Fossil fuels',
        text: ['Carbon-based fuels from fossil carbon deposits, including coal, oil, and natural gas.']
    },
    {
        title: 'Future Building Standard (FBS)',
        text: ['The aim of the Future Buildings Standard is to improve the energy efficiency and sustainability of new and renovated buildings other than new dwellings, which are covered by the Future Homes Standard.']
    },
    {
        title: 'Future Homes Standard (FHS)',
        text: ['The Future Homes Standard is a set of standards that will complement the Building Regulations to ensure new homes built from 2025 will produce 75-80% less carbon emissions than homes delivered under current regulations. Interim standards were introduced from 15 June 2022. ']
    },
    {
        title: 'Green Roof',
        text: ['A green roof is a layer of vegetation planted over a waterproofing system that is installed on top of a flat or slightly–sloped roof. Plants help to reduce overheating, retain water and increase biodiversity and habitats.']
    },
    {
        title: 'Green Walls',
        text: ['A green wall is a vertical built structure intentionally covered by vegetation. Plants help to reduce overheating, retain water and increase biodiversity and habitats. ']
    },
    {
        title: 'Ground Source Heat Pump ',
        text: ['A ground source heat pump is a renewable heating system that extracts low-temperature solar energy stored in the ground or water using buried pipework and compresses this energy into a higher temperature. A ground source heat pump provides a building with 100% of its heating and hot water all year round. ']
    },
    {
        title: 'Habitat',
        text: ['The particular environment or place where an organism or species tend to live; a more locally circumscribed portion of the total environment. ']
    },
    {
        title: 'Major Development',
        text: [
            'For housing, development where 10 or more homes will be provided, or the site has an area of 0.5 hectares or more.',
            'For non-residential development it means additional floorspace of 1,000m2 or more, or a site of 1 hectare or more, or as otherwise provided in the Town and Country Planning (Development Management Procedure) (England) Order 2015. '
        ]
    },
    {
        title: 'Minor development ',
        text: [
            'A minor development is anything below the threshold for major developments. For example: the number of dwellings is between one and nine, or the floorspace is less than 1,000sqm or the site area less than one hectare. '
        ]
    },
    {
        title: 'Mitigation ',
        text: [
            'Climate change mitigation consists of actions to limit global warming and its related effects.This involves reductions in human emissions of greenhouse gases as well as activities that reduce their concentration in the atmosphere. It is one of the ways to respond to climate change, along with adaptation. '
        ]
    },
    {
        title: 'Offsetting ',
        text: ['A carbon offset is a reduction or removal of emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere. Offsets are measured in tonnes of carbon dioxide-equivalent. Carbon offsetting is just one tool in our toolbox to tackle climate change and should not be considered as a stand-alone action. Organisations and individuals should look to reduce their emissions as much as possible, as well as taking responsibility for what remains, by offsetting it. ']
    },
    {
        title: 'Photo Voltaic (PV) Panels ',
        text: [
            'PV panels, also known as solar panels, capture the sun\'s energy and convert it into electricity. '
        ]
    },
    {
        title: 'Renewable Energy ',
        text: ['Energy obtained from natural sources such as geothermal, wind, photovoltaic, solar, and biomass. The harvesting and use of this energy resource does not result in additional carbon being emitted into the atmosphere. ']
    },
    {
        title: 'Solar PVT ',
        text: ['A combination of solar photo voltaic panels and solar thermal panels in one module and produces electricity and heat simultaneously ']
    },
    {
        title: 'Solar thermal ',
        text: ['System that uses energy from the sun to warm water for storage in a hot water cylinder or thermal store. ']
    },
    {
        title: 'Solar thermaldynamic ',
        text: ['A flat plate collector which gains energy from the sun as well as the ambient air. ']
    },
    {
        title: 'Standard Assessment Procedure (SAP) ',
        text: ['A SAP assessment is the only government approved method for calculating the energy performance of dwellings. These can be done at a design stage, which forecasts the energy performance of a dwelling, and also ‘as built’ which calculates the actual energy performance of the constructed building. ']
    },
    {
        title: 'Sustainable Transport ',
        text: ['Sustainable transportation is the capacity to support the mobility needs of a society in a manner that is the least damageable to the environment and does not impair the mobility needs of future generations. The most sustainable forms of transport often move multiple people between fixed points, in the UK buses and trains are considered the most sustainable of mainstream transport modes. These can be made more sustainable by using renewable and low carbon fuels. ']
    },
    {
        title: 'Thermal efficiency ',
        text: ['Is a measure of how well a building uses energy for space heating. A higher level of energy efficiency means that a building uses less energy than a building of an equivalent size, (reducing energy waste) because less energy is lost through the fabric of the building. ']
    }
]


export const GlossaryPage = () => {
    return (
        <Box>
            <Typography variant={'h2'} px={2} pt={5}>Glossary</Typography>
            {text.map(({text, title}) => (
                <Box key={title} sx={{ py: 3, px: 2}}>
                    <Typography variant={'h6'}>{title}</Typography>
                    <Typography>{text}</Typography>
                </Box>
            ))}
            <Box sx={{ py: 3, px: 2}}>
                <Typography variant={'h6'}>Class E</Typography>
                <Typography>The Town and Country Planning (Use Classes) Order 1987 (as amended) introduced a new
                    use class E – Commercial, Business and Service. This covers a variety of uses including retail,
                    restaurant and café, financial and professional services, indoor sport, recreation and fitness,
                    medical or health services, crèche or day centre, offices, research and development and
                    industrial services. Further detail can be found <a href='https://www.planningportal.co.uk/permission/common-projects/change-of-use/use-classes' target='_blank'>here</a>.</Typography>
            </Box>
        </Box>
    )
}