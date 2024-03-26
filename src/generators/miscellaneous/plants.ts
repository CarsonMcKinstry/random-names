import { sample } from 'lodash-es';

export default function plants() {
    let names: string;
    const nm1 = [
        'Abelia',
        'Abeliophyllum',
        'Abies',
        'Abutilon',
        'Acalypha',
        'Acanthopanax',
        'Acanthus',
        'Acer',
        'Achillea',
        'Achimenes',
        'Acorus',
        'Aconitum',
        'Acorus',
        'Actaea',
        'Actinidia',
        'Actinomeris',
        'Adiantum',
        'Adina',
        'Aegopodium',
        'Aesculus',
        'Agalinis',
        'Agapanthus',
        'Agarista',
        'Agastache',
        'Agava',
        'Ageratina',
        'Ageratum',
        'Ailanthus',
        'Ajuga',
        'Akebia',
        'Albizia',
        'Albuca',
        'Alcea',
        'Alchemilla',
        'Aletris',
        'Alisma',
        'Allamanda',
        'Allium',
        'Alnus',
        'Aloysia',
        'Alstroemeria',
        'Alternanthera',
        'Amaranthus',
        'Amaryllis',
        'Amelanchier',
        'Amianthium',
        'Ammi',
        'Ammobium',
        'Amorpha',
        'Amelopsos',
        'Amsonia',
        'Anaphalis',
        'Anchusa',
        'Andromeda',
        'Andropogon',
        'Anemone',
        'Anethum',
        'Anemonella',
        'Angelica',
        'Angelonia',
        'Anisostichus',
        'Antennaria',
        'Anthericum',
        'Antholyza',
        'Anthoxanthum',
        'Antrhiscus',
        'Antigonon',
        'Antirrhinum',
        'Aplectrum',
        'Apocynum',
        'Aquilegia',
        'Arachiodes',
        'Aralia',
        'Araujia',
        'Arbutus',
        'Arcrostaphy',
        'Arctium',
        'Arctosis',
        'Ardisia',
        'Arenaria',
        'Arethusa',
        'Aristolochia',
        'Armeria',
        'Aronia',
        'Arrhenatherum',
        'Artemesia',
        'Artemisia',
        'Aruncus',
        'Arundo',
        'Asarum',
        'Acelpias',
        'Asimina',
        'Aspidistra',
        'Asplenium',
        'Aster',
        'Astilbe',
        'Astragalus',
        'Athyrium',
        'Aucuba',
        'Aureolaria',
        'Aurinia',
        'Azolla',
        'Babiana',
        'Baccharis',
        'Baptisia',
        'Bassharis',
        'Baumea',
        'Begonia',
        'Belamcanda',
        'Bellis',
        'Berberis',
        'Bergenia',
        'Bessera',
        'Betula',
        'Bidens',
        'Bignonia',
        'Blechnum',
        'Bletilla',
        'Bloomeria',
        'Borago',
        'Botrychium',
        'Bougainivillea',
        'Brasenia',
        'Brassica',
        'Briza',
        'Brodiaea',
        'Browallia',
        'Brugmansia',
        'Buddleia',
        'Bumelia',
        'Buxus',
        'Caladium',
        'Calamagrostis',
        'Calendula',
        'Callicarpa',
        'Callistephus',
        'Calodecedrus',
        'Calochortus',
        'Calonyction',
        'Caltha',
        'Calycanthus',
        'Camassia',
        'Campanula',
        'Campsis',
        'Canna',
        'Cardiucrinum',
        'Carduus',
        'Carex',
        'Carpinus',
        'Carum',
        'Carya',
        'Caryopteris',
        'Cassia',
        'Castanea',
        'Castilleja',
        'Catalpa',
        'Catharanthus',
        'Ceanothus',
        'Cedrela',
        'Cedrus',
        'Celastrus',
        'Celosia',
        'Celtis',
        'Centaurea',
        'Centranthus',
        'Cephalanthus',
        'Ceratiola',
        'Cercidiphyllum',
        'Cercic',
        'Chamaecyperai',
        'Chamaecyparis',
        'Chasmanthe',
        'Chelone',
        'Chionanthus',
        'Chionodoxa',
        'Chlidanthus',
        'Chrysanthemum',
        'Chrysogonum',
        'Chicorium',
        'Cimicifuga',
        'Cladrastis',
        'Claytonia',
        'Clematis',
        'Cleome',
        'Clerodendrum',
        'Clethra',
        'Clifonia',
        'Clitoria',
        'Clivia',
        'Cobaena',
        'Cocculus',
        'Coix',
        'Colchicum',
        'Coleus',
        'Colocasia',
        'Commelina',
        'Conopholis',
        'Conradina',
        'Convallaria',
        'Coreopsis',
        'Coriandrum',
        'Cornus',
        'Cortaderia',
        'Corylorsis',
        'Corylus',
        'Cosmos',
        'Cotinus',
        'Cotoneaster',
        'Crataegus',
        'Cronum',
        'Crocosmia',
        'Crocus',
        'Cryptomeria',
        'Cunninghamia',
        'Cuphea',
        'Cupressus',
        'Curcuma',
        'Curtonus',
        'Cyclamen',
        'Cydonia',
        'Cymbopogon',
        'Cypredium',
        'Cyressus',
        'Cyrilla',
        'Dahlia',
        'Danae',
        'Daphne',
        'Datura',
        'Daucus',
        'Davidia',
        'Decumaria',
        'Delphinium',
        'Dandranthema',
        'Dennstaedtia',
        'Dentaria',
        'Deparia',
        'Deschampsia',
        'Desmodium',
        'Deutzia',
        'Dianthus',
        'Diascia',
        'Dicentra',
        'Dichichium',
        'Dichromena',
        'Doctamnus',
        'Diervilla',
        'Dietes',
        'Digitalis',
        'Diodia',
        'Dionaea',
        'Diospyros',
        'Dipelta',
        'Diphelleia',
        'Diplazium',
        'Disanthus',
        'Disporum',
        'Dodecatheon',
        'Dilochos',
        'Doronucum',
        'Drosera',
        'Dryopteris',
        'Duchesnea',
        'Duranta',
        'Dyssodia',
        'Eccremocarpus',
        'Echinecea',
        'Ehinops',
        'Echium',
        'Ehretia',
        'Eichornia',
        'Elaegnus',
        'Eleagnus',
        'Eleocharis',
        'Elymus',
        'Enkianthus',
        'Epifagus',
        'Epigaea',
        'Epilobium',
        'Epimedium',
        'Equisetum',
        'Eragrostrum',
        'Eranthis',
        'Eremurus',
        'Erianthus',
        'Erigeron',
        'Eriobotrya',
        'Eriocaulon',
        'Eriophorum',
        'Erysimum',
        'Erythronium',
        'Escallonia',
        'Eschscholzia',
        'Eucalyptus',
        'Eacharis',
        'Eucomis',
        'Eucommia',
        'Ecrosia',
        'Euonymus',
        'Eupotorium',
        'Eophorbia',
        'Euptellea',
        'Euryale',
        'Escaphis',
        'Evodia',
        'Evolvulus',
        'Exochorda',
        'Fagopyrum',
        'Fagus',
        'Falluiga',
        'Fathsedera',
        'Fatsia',
        'Feijoa',
        'Festuca',
        'Ficus',
        'Filipendula',
        'Firmiana',
        'Foeniculum',
        'Fontanesia',
        'Forsythia',
        'Fothergilla',
        'Fragaria',
        'Franklinia',
        'Fraxinus',
        'Freesia',
        'Fritillaria',
        'Fuchsia',
        'Gaillardia',
        'Galactia',
        'Galanthus',
        'Galax',
        'Galearis',
        'Galium',
        'Galtonia',
        'Gardenia',
        'Gaultheria',
        'Gaura',
        'Gazania',
        'Gelseminum',
        'Gelsemium',
        'Genista',
        'Gentian',
        'Gentiana',
        'Geranium',
        'Gerardia',
        'Gerbera',
        'Geum',
        'Gillenia',
        'Ginko',
        'Gladiolus',
        'Glechoma',
        'Gleditsia',
        'Gloriosa',
        'Glyceria',
        'Gnaphalium',
        'Gomphrena',
        'Goodyera',
        'Gordonia',
        'Gratiola',
        'Gymnocladus',
        'Gypsophila',
        'Habenaria',
        'Habranthus',
        'Hakonechlao',
        'Halesia',
        'Hamamelis',
        'Hedera',
        'Hedychium',
        'Helenium',
        'Helianthus',
        'Helichrysum',
        'Helictotrichor',
        'Heliopsis',
        'Heliotropium',
        'Helleborus',
        'Gemerocallis',
        'Gepatica',
        'Heptacodium',
        'Hesperis',
        'Heuchera',
        'Hibiscis',
        'Hippeastrum',
        'Hosta',
        'Houstonia',
        'Hovenia',
        'Humulus',
        'Hyacinthus',
        'Hydrangea',
        'Hymenocallis',
        'Hypericum',
        'Hyssopus',
        'Iberis',
        'Ilex',
        'Illicum',
        'Imperarata',
        'Incarvillea',
        'Indigofera',
        'Inula',
        'Ipheion',
        'Ipomea',
        'Ipomoea',
        'Ipomopsis',
        'Iris',
        'Isotria',
        'Itea',
        'Ixia',
        'Ixiolirion',
        'Ixora',
        'Jasminum',
        'Juglans',
        'Juncus',
        'Juniperous',
        'Kadsura',
        'Kalimeris',
        'Kalmia',
        'Kalopanax',
        'Kerria',
        'Kniphofia',
        'Koeleria',
        'Koelreuteria',
        'Kolkwitzia',
        'kostelezkya',
        'Krigia',
        'Laburnum',
        'Lactuca',
        'Lagenaria',
        'Lagerstroemia',
        'Lagurus',
        'Lamium',
        'Lantana',
        'Lapeirousia',
        'Larix',
        'Lathrus',
        'Lathyrus',
        'Larusi',
        'Lavandula',
        'Lavatera',
        'Leiophyllum',
        'Lemna',
        'Lepisorus',
        'Lespedeza',
        'Leucojum',
        'Leucothoe',
        'Levisticum',
        'Liatris',
        'Ligularia',
        'Ligistrum',
        'Lilium',
        'Limonium',
        'Linaria',
        'Lindera',
        'Linum',
        'Liquidambar',
        'Liriodendron',
        'Liriope',
        'Lobelia',
        'Lobularia',
        'Lonicera',
        'Loropetalum',
        'Ludwigia',
        'Luffa',
        'Lupinus',
        'Lycoris',
        'Lyonia',
        'Lysimachia',
        'Lythrum',
        'Maackia',
        'Maclura',
        'Magnolia',
        'Mahonia',
        'Maianthemum',
        'Majorana',
        'Malope',
        'Malus',
        'Malva',
        'Malvaviscus',
        'Mandevilla',
        'Marrubium',
        'Marshallia',
        'Marsilea',
        'Matelea',
        'Matricaria',
        'Matteuccia',
        'Meconopsis',
        'Mediola',
        'Melampodium',
        'Melampyrum',
        'Melia',
        'Melica',
        'Mentha',
        'Metensia',
        'Metasequoia',
        'Michelia',
        'Microbiota',
        'Milla',
        'Mimulus',
        'Mina',
        'Minuartia',
        'Mirabilis',
        'Mischanthus',
        'Mitella',
        'Molina',
        'Molucella',
        'Momordica',
        'Monarda',
        'Moraea',
        'Morus',
        'Muhlenbergia',
        'Muscari',
        'Myosotis',
        'Myrica',
        'Myriophyllum',
        'Nandina',
        'Narcissus',
        'Nassella',
        'Neillia',
        'Nelumbo',
        'Nemesia',
        'Nemophila',
        'Nepeta',
        'Nepta',
        'Nerine',
        'Nerium',
        'Neviusia',
        'Nierembergia',
        'Nigella',
        'Nomocharis',
        'Nymphaea',
        'Nymphoides',
        'Nyssa',
        'Ocimum',
        'Odentonema',
        'Oenethera',
        'Omphalodes',
        'Onoclea',
        'Ophiopogon',
        'Origanum',
        'Ornithogalum',
        'Orontium',
        'Osmanthus',
        'Osmunda',
        'Osteaspermum',
        'Ostrya',
        'Oxalis',
        'Oxydendrum',
        'Pachysandra',
        'Paeonia',
        'Pandorea',
        'Panicum',
        'Papaver',
        'Parnassia',
        'Paronychia',
        'Parrotia',
        'Parthenium',
        'Parthenocissus',
        'Passiflora',
        'Paulownia',
        'Pedicularis',
        'Pelargonium',
        'Pellaea',
        'Pennisetum',
        'Penstemon',
        'Pentas',
        'Perilla',
        'Perovskia',
        'Persea',
        'Petroselinum',
        'Phacelia',
        'Phalaris',
        'Phaseolus',
        'Phegopteris',
        'Phellodendron',
        'Phelloendro',
        'Phlox',
        'Phormium',
        'Photinia',
        'Physocarpus',
        'Physostegia',
        'Phytolacca',
        'Picea',
        'Picrasma',
        'Pieris',
        'Pilosella',
        'Pimpinella',
        'Pickneya',
        'Pinguicula',
        'Pinus',
        'Pistacia',
        'Pittosporum',
        'Platanthera',
        'Platanus',
        'Platycodon',
        'Plectranthus',
        'Pleioblastus',
        'Plumbago',
        'Podocarpus',
        'Podophyllum',
        'Pogonia',
        'Polemonium',
        'Polianthes',
        'Poliothyrsis',
        'Polygala',
        'Polygonatum',
        'Polygonella',
        'Polygonum',
        'Polypodium',
        'Polystichum',
        'Poncirus',
        'Pontederia',
        'Populus',
        'Porteranthus',
        'Potentilla',
        'Poterium',
        'Prenanthes',
        'Primula',
        'Prunella',
        'Prunus',
        'Pseudocydonia',
        'Pseudolaria',
        'Pseudolarix',
        'Pseudotsya',
        'Ptelea',
        'Pteridium',
        'Pteris',
        'Pterocarcya',
        'Pteroceltic',
        'Pterostyrax',
        'Pulmonaria',
        'Punica',
        'Puschkinia',
        'Pycnanthemum',
        'Pyracantha',
        'Pyrathrum',
        'Pyrola',
        'Pyrrosia',
        'Pyrus',
        'Quamoclit',
        'Quercus',
        'Ranunclus',
        'Ratibida',
        'Rhammus',
        'Ramnella',
        'Ramnuus',
        'Rhaphiolepis',
        'Rhapidiophyllum',
        'Rhexia',
        'Rododendron',
        'Rhodohypoxis',
        'Rhus',
        'Rhychospora',
        'Ricinus',
        'Robinia',
        'Rosa',
        'Rosmarinus',
        'Rubus',
        'Rudbeckia',
        'Ruellia',
        'Rumex',
        'Ruscus',
        'Russelia',
        'Ruta',
        'Sabal',
        'Sabatia',
        'Saccharum',
        'Sagittaria',
        'Salix',
        'Salvia',
        'Sambucus',
        'Sandersonia',
        'Santolina',
        'Saponaria',
        'Sarcococca',
        'Sarracenia',
        'Sasa',
        'Sassafras',
        'Satureja',
        'Saururus',
        'Saxifraga',
        'Scabiosa',
        'Scadoxus',
        'Scaevola',
        'Schizichyrium',
        'Schizanthus',
        'Schizophragma',
        'Schizolstylis',
        'Scilla',
        'Scripus',
        'Scutellaria',
        'Sedum',
        'Selaginella',
        'Senecio',
        'Sequoia',
        'Sequsiadendron',
        'Serissa',
        'Sesbania',
        'Sesleria',
        'Setcreasea',
        'Shepherdia',
        'Shortia',
        'Silene',
        'Silphinum',
        'Sinojackia',
        'Sisyrinchium',
        'Skimmia',
        'Smilacina',
        'Smilax',
        'Solanum',
        'Solenostemon',
        'Solidago',
        'Sonchus',
        'Sophora',
        'Sorbaria',
        'Sorbus',
        'Sorphaatum',
        'Sparaxis',
        'Spartina',
        'Spartium',
        'Spigelia',
        'Spiraea',
        'Spiranthes',
        'Spodiopogon',
        'Sporobolis',
        'Sporobolus',
        'Sprekelia',
        'Stachys',
        'Stachyurus',
        'Staphylea',
        'Stauntonia',
        'Stella',
        'Stellaria',
        'Stenanthium',
        'Stephandra',
        'Sternbergia',
        'Stewarta',
        'Stewartia',
        'Stokesia',
        'Streptopus',
        'Strobilanthes',
        'Stylophorum',
        'Stylosanthes',
        'Styrax',
        'Sutera',
        'Sycopsis',
        'Symphoricarpos',
        'Syringa',
        'Tagetes',
        'Tamarix',
        'Tanacetum',
        'Taraxacum',
        'Targetes',
        'Taxodium',
        'Taxus',
        'Tecomaria',
        'Tephrosia',
        'Ternstroemia',
        'Teucrium',
        'Thalia',
        'Thalictrum',
        'Thelpteris',
        'Thermopsis',
        'Thuja',
        'Thunbergia',
        'Thymus',
        'Tiarella',
        'Tilia',
        'Tipularia',
        'Tithonia',
        'Toona',
        'Torenia',
        'Trachelospermum',
        'Trachycarpus',
        'Tradescantia',
        'Tragopogon',
        'Trichostema',
        'Trifolium',
        'Trillium',
        'Tritonia',
        'Trollius',
        'Tropaeolum',
        'Tsuga',
        'Tulipa',
        'Typha',
        'Ulmus',
        'Utricularia',
        'Uvularia',
        'Vaccinium',
        'Valeriana',
        'Veltheimia',
        'Varatrum',
        'Varbascum',
        'Verbana',
        'Veronica',
        'Vetiverzia',
        'Viburnum',
        'Victoria',
        'Vinca',
        'Viola',
        'Vitex',
        'Vitis',
        'Waldsteinia',
        'Watsonia',
        'Weigela',
        'Wisteria',
        'Woodsia',
        'Woodwardia',
        'Xanthoriza',
        'Xyris',
        'Yucca',
        'Zantedeschia',
        'Zanthoxylum',
        'Zelkova',
        'Zeonbia',
        'Zephyranthes',
        'Zinnia',
        'Zizia',
    ];
    const nm2 = [
        'Chinesis',
        'Mosanensis',
        'Grandiflora',
        'Distichum',
        'Balsamea',
        'Cilicica',
        'Concolor',
        'Firma',
        'Freseri',
        'Koreana',
        'Lasiucarpa',
        'Nordmanniana',
        'Pinagene',
        'Hybridum',
        'Wilkesiana',
        'Siboldianus',
        'Spinosus',
        'Barbatu,',
        'Buergeranum',
        'Campestre',
        'Capillipes',
        'Coppadocicum',
        'Crataegifum',
        'Diabolicum',
        'Ginnala',
        'Griseum',
        'Japonica',
        'Japonicum',
        'Leucoderme',
        'Mono',
        'Negundo',
        'Nigrum',
        'Nokoense',
        'Nipponicum',
        'Palmatum',
        'Platanoides',
        'Pseuodoplatanus',
        'Rubrum',
        'Refinerve',
        'Saccharinum',
        'Saccharum',
        'Sieboldiamum',
        'Spicatum',
        'Tegmentosum',
        'Triflorum',
        'Truncatum',
        'Millefolium',
        'Tomentosa',
        'Bicolor',
        'Uncinatum',
        'Calamus',
        'Calomus',
        'Gramimineus',
        'Gramineus',
        'Pachypoda',
        'Chinensis',
        'Kolomikta',
        'Melanandra',
        'Alternifolia',
        'Capillus',
        'Pedatum',
        'Raddianum',
        'Rubella',
        'Podagraria',
        'Glabra',
        'Hippcastamon',
        'Octandra',
        'Parviflora',
        'Pavia',
        'Populifolia',
        'Foeniculum',
        'Parryi',
        'Salmiana',
        'Houstonianum',
        'Altissima',
        'Reptans',
        'Quinata',
        'Julibrissin',
        'Kalkora',
        'Rosea',
        'Mollis',
        'Farinosa',
        'Cathartica',
        'Aflatunense',
        'Caeruleum',
        'Canadense',
        'Cowanii',
        'Giganteum',
        'Karataviense',
        'Moly',
        'Neopolitanium',
        'Tricoccum',
        'Glutinosa',
        'Hirsuta',
        'Serrulata',
        'Hybrida',
        'Triphylla',
        'Dentata',
        'Caudatis',
        'Belladonna',
        'Alnifolia',
        'Arborea',
        'Canadensis',
        'Laevis',
        'Alatum',
        'Canescens',
        'Fruticosa',
        'Arborea',
        'Azurea',
        'Capensis',
        'Polofolia',
        'Gerardii',
        'Glomeratus',
        'Virginicus',
        'Blanda',
        'Coronaria',
        'Fulgens',
        'Pulsatilla',
        'Riparia',
        'Thalictroides',
        'Graveolens',
        'Trinquinata',
        'Angustifolia',
        'Carprealatus',
        'Dioica',
        'Solitaria',
        'Liliago',
        'Odoratum',
        'Cerefolium',
        'Leptopus',
        'Majus',
        'Hyemale',
        'Cannabinum',
        'Canadensis',
        'Simplicior',
        'Spinosa',
        'Sericifera',
        'Menziesii',
        'Lappa',
        'Minus',
        'Crenata',
        'Stricta',
        'Bulbosa',
        'Daconitum',
        'Triphyllum',
        'Durior',
        'Maritima',
        'Arbutifolia',
        'Melanocarpa',
        'Prunifolia',
        'Ludoviciana',
        'Abrotanum',
        'Absinthium',
        'Dracunculus',
        'Dioicus',
        'Domax',
        'Donax',
        'Splendens',
        'Curassavica',
        'Incarnata',
        'Lanceolata',
        'Quadrifolia',
        'Syriaca',
        'Tuberosa',
        'Triloba',
        'Acuminatus',
        'Carolinianis',
        'Cordifolius',
        'Divaricatus',
        'Ericoides',
        'Laevis',
        'Lateriflorus',
        'Oblongifolius',
        'Pilosus',
        'Umbellatus',
        'Biternata',
        'Filix',
        'Halimifolia',
        'Alba',
        'Australis',
        'Rubiginosa',
        'Grandis',
        'Semperflorens',
        'Xargenteogutta',
        'Chinensis',
        'Perennis',
        'Candidula',
        'Julianae',
        'Koreana',
        'Thunbergii',
        'Triacanthophora',
        'Verruculosa',
        'Chenaultii',
        'Gladweynensis',
        'Mentorensis',
        'Cordifolia',
        'Jacqemontii',
        'Papyrifera',
        'Pendula',
        'Platyphylla',
        'Aristosa',
        'Laevis',
        'Spicant',
        'Virginianum',
        'Spectabilis',
        'Schreberi',
        'Juncea',
        'Oleracea',
        'Maxima',
        'Speciosa',
        'Alternifolia',
        'Davidii',
        'Globosa',
        'Lindleyana',
        'Weyeriana',
        'Harlandii',
        'Sepervirens',
        'Sinica',
        'Brachytricha',
        'Oficcinilalis',
        'Chinensis',
        'Decurrens',
        'Aculeatum',
        'Palustris',
        'Floridus',
        'Cusickii',
        'Radicans',
        'Tagliabuana',
        'Muticus',
        'Elata',
        'Firma',
        'Morrowii',
        'Muskingumensis',
        'Oshimensis',
        'Phyllocephala',
        'Siderosticha',
        'Betulus',
        'Caroliniana',
        'Cordata',
        'Orientalis',
        'Carvi',
        'Cordiformis',
        'Glabra',
        'Mystristicaeformis',
        'Ovalis',
        'Ovata',
        'Pallida',
        'Fasiculata',
        'Pumila',
        'Sative',
        'Coccinea',
        'Bignonioides',
        'Speciosa',
        'Sinsensis',
        'Atlantica',
        'Deodara',
        'Libani',
        'Orbiculatus',
        'Scandens',
        'Laevigata',
        'Montana',
        'Cineraria',
        'Cyanus',
        'Occidentalis',
        'Ericoides',
        'Plumbaginoides',
        'Retisus',
        'Chingii',
        'Giganteta',
        'Racemosa',
        'Siliquastrum',
        'Yunnanensis',
        'Obtusa',
        'Pisifera',
        'Thyoides',
        'Nobile',
        'Latifolium',
        'Lyonii',
        'Retusus',
        'Luciliae',
        'Fragrans',
        'Morifolium',
        'Balsamita',
        'Leucanthemum',
        'Intybus',
        'Lutea',
        'Armandii',
        'Coccinea',
        'Paniculata',
        'Texensis',
        'Viorma',
        'Viticella',
        'Trichotomum',
        'Acuminata',
        'Alnifolia',
        'Monophylla',
        'Mariana',
        'Scandens',
        'Carolina',
        'Lacryma',
        'Autumnale',
        'Verticilaata',
        'Majalis',
        'Sativum',
        'Alternifolia',
        'Amomum',
        'Asperifolia',
        'Controversa',
        'Kousa',
        'Sanguinea',
        'Selloana',
        'Avellana',
        'Coggygria',
        'Dammeri',
        'Horizontalis',
        'Salicifolius',
        'Crusgalii',
        'Oxycantha',
        'Phaenopyrum',
        'Pinnatifida',
        'Lavalleri',
        'Hysspoifolia',
        'Citratus',
        'Arizonica',
        'Hortensis',
        'Caucasia',
        'Genkwa',
        'Odora',
        'Retusa',
        'Mentensiana',
        'Innoxia',
        'Carota',
        'Involucrata',
        'Barbara',
        'Cooperi',
        'Nubigena',
        'Exatatum',
        'Tricorne',
        'Pacificum',
        'Punctiloba',
        'Laciniata',
        'Acrostichoides',
        'Cesptiosa',
        'Nudiflorum',
        'Crenata',
        'Gracilis',
        'Ninpoensis',
        'Scabra',
        'Lemoinei',
        'Rosea',
        'Armeria',
        'Barbatus',
        'Chinensis',
        'Deltoides',
        'Plumarius',
        'Barbarae',
        'Intergerrima',
        'Canadensis',
        'Cucullaria',
        'Exima',
        'Spectabilis',
        'Colorata',
        'Latifolia',
        'Albus',
        'Sessilifolia',
        'Obscura',
        'Purpurea',
        'Virginiana',
        'Muscipula',
        'Khaki',
        'Virginiana',
        'Florbunda',
        'Cymosa',
        'Ceridifolius',
        'Maculatium',
        'Meadia',
        'Lablab',
        'Filiformis',
        'Affinis',
        'Carthusiana',
        'Celsa',
        'Dilatata',
        'Erythrosora',
        'Goldiana',
        'Marginalis',
        'Siboldii',
        'Vilarri',
        'Wallichiana',
        'Indica',
        'Erecta',
        'Tenuiloba',
        'Scaber',
        'Paradoxa',
        'Purpurea',
        'Vulgare',
        'Acuminata',
        'Crassipes',
        'Pungens',
        'Angustifolia',
        'Quadrangulata',
        'Arenarius',
        'Campanulatus',
        'Repens',
        'Angustifolium',
        'Perralchicum',
        'Rubrum',
        'Youngianum',
        'Hyemale',
        'Scorpoides',
        'Spectablis',
        'Ravannae',
        'Pulchellus',
        'Aquaticum',
        'Linifolium',
        'Cinerea',
        'Ulmoides',
        'Alatus',
        'Bungeanus',
        'Fortunei',
        'Hamiltonianus',
        'Kiautschovicus',
        'Coelestinum',
        'Hyssopifolium',
        'Maculatum',
        'Perfoliatum',
        'Rugosum',
        'Corrllata',
        'Cyparissias',
        'Esula',
        'Marginata',
        'Myrsinites',
        'Polychroma',
        'Robbiae',
        'Polyvandra',
        'Ferox',
        'Glomeratus',
        'Macrantha',
        'Sagittatum',
        'Crenata',
        'Engleriana',
        'Sylvatica',
        'Lizei',
        'Sellowiana',
        'Glauca',
        'Ovina',
        'Pumila',
        'Palmata',
        'Simplex',
        'Ouata',
        'Viridissima',
        'Gardenii',
        'Alatamaha',
        'Carloniana',
        'Profunda',
        'Imperialis',
        'Melagris',
        'Hybrida',
        'Pulchella',
        'Nivalis',
        'Aphylla',
        'Spectablis',
        'Aparine',
        'Odoratum',
        'Candicans',
        'Augusta',
        'Jasminoides',
        'Procumbens',
        'Lindheimeri',
        'Ranki',
        'Lydia',
        'Tinctoria',
        'Quinquefolia',
        'Saponaria',
        'Manculatium',
        'Sanguineum',
        'Flava',
        'Laevigata',
        'Trifoliata',
        'Biloba',
        'Byzantinus',
        'Hederace',
        'Triacanthos',
        'Obtusifolium',
        'Globosa',
        'Pubescens',
        'Lasianthus',
        'Viscidula',
        'Dioicus',
        'Paniculata',
        'Aureola',
        'Macro',
        'Diptera',
        'Tetraptera',
        'Macrophylla',
        'Vernalis',
        'Canariensis',
        'Colchica',
        'Helix',
        'Coronarium',
        'Bractaetum',
        'Helianthoides',
        'Amplexicaule',
        'Arborescens',
        'Miconioides',
        'Matronnalis',
        'Coccineus',
        'Moscheutos',
        'Delcis',
        'Lupulus',
        'Anomala',
        'Arborescens',
        'Quercifolia',
        'Calycinum',
        'Proflicum',
        'Amara',
        'Aquifolium',
        'Cassine',
        'Cornuta',
        'Crenata',
        'Decidua',
        'Opaca',
        'Pernyi',
        'Serrata',
        'Verticallata',
        'Vomitoria',
        'Anisatum',
        'Flordanum',
        'Parviflorum',
        'Balsamina',
        'Capensis',
        'Wallerana',
        'Cylindrica',
        'Amblyantha',
        'Heterantha',
        'Kirilowii',
        'Pseudotinctoria',
        'Uniflorum',
        'Quamoclit',
        'Pandurata',
        'Rubra',
        'Brevicaulis',
        'Ensata',
        'Germanica',
        'Hexagona',
        'Hollandica',
        'Reticulata',
        'Tectorum',
        'Floridum',
        'Fruticans',
        'Humile',
        'Officinale',
        'Parkeri',
        'Diphylla',
        'Effusus',
        'Conferta',
        'Procumbens',
        'Scopulorum',
        'Conferta',
        'Sabina',
        'Squamata',
        'Pinnatifida',
        'Angustifolia',
        'Pictus',
        'Bipinnata',
        'Paniculata',
        'Amabilis',
        'Anagyroides',
        'Floridana',
        'Siceraria',
        'Fauriei',
        'Indica',
        'Ovatus',
        'Amplexicaule',
        'Galeobdolon',
        'Maculatum',
        'Camara',
        'Montevidensis',
        'Triofoliata',
        'Kaempheri',
        'Latifolius',
        'Odoratus',
        'Fluviatilis',
        'Angustifolia',
        'Stochas',
        'Trimestris',
        'Buxifolium',
        'Thunbergii',
        'Aestivum',
        'Axillaris',
        'Fontanesiana',
        'Recurvara',
        'Psycnostachya',
        'Scariosa',
        'Spicata',
        'Squarrosa',
        'Stenocephala',
        'Tussilaginea',
        'Lucidum',
        'Sinense',
        'Candidum',
        'Michauxii',
        'Latifolium',
        'Sinautum',
        'Canadensis',
        'Benzoin',
        'Glauca',
        'Obtusiloba',
        'Grandiflorum',
        'Perenne',
        'Lilifolia',
        'Formosana',
        'Styraciflua',
        'Tulipifer',
        'Exiliflora',
        'Muscaria',
        'Spicata',
        'Cardinalis',
        'Erinus',
        'Puberala',
        'Sphilitica',
        'Spicata',
        'Maritima',
        'Alseuosmoides',
        'Fragrantissima',
        'Nitida',
        'Periclymenum',
        'Pileata',
        'Heckrottii',
        'Tellmanniana',
        'Xyiosteum',
        'Alternifolia',
        'Longifolia',
        'Sidioides',
        'Diffusus',
        'Villosus',
        'Chalcedonica',
        'Coronaria',
        'Aerea',
        'Radiata',
        'Ligustrina',
        'Ciliata',
        'Clethroides',
        'Numularia',
        'Quadrifolia',
        'Salicaria',
        'Amuremsis',
        'Pomifera',
        'Loebneri',
        'Acuminata',
        'Cylindrica',
        'Denudata',
        'Fraseri',
        'Kobus',
        'Liliflora',
        'Macrophylla',
        'Stella',
        'Tripetala',
        'Soulangiana',
        'Aquifolium',
        'Bealei',
        'Hortensis',
        'Halliana',
        'Hupehensis',
        'Yannanensis',
        'Moschata',
        'Arboreus',
        'Amabalis',
        'Graminifolia',
        'Carolinensis',
        'Recutita',
        'Struthiopteris',
        'Betonicifolia',
        'Paludosum',
        'Lineare',
        'PRatense',
        'Azadarach',
        'Ciliata',
        'Spicata',
        'Piperita',
        'Glyptostroboides',
        'Yunnanensis',
        'Decussata',
        'Lobata',
        'Verna',
        'Jalapa',
        'Floridulus',
        'Sinensis',
        'Transmorrisonensis',
        'Diphylla',
        'Caerulea',
        'Laevis',
        'Didyma',
        'Punctata',
        'Capillaris',
        'Armeniacum',
        'Botryoides',
        'Comosum',
        'Sylvatica',
        'Cerifera',
        'Domestica',
        'Tenuissima',
        'Lutea',
        'Strumosa',
        'Menziesii',
        'Faasenii',
        'Bowdenii',
        'Oleander',
        'Hippomanica',
        'Damascena',
        'Colorata',
        'Odorata',
        'Marliacea',
        'Pelatum',
        'Ogeche',
        'Biennis',
        'Fruticosa',
        'Speciosa',
        'Tetragona',
        'Linifolia',
        'Sensibilis',
        'Jaburan',
        'Majorana',
        'Vulgare',
        'Delavayi',
        'Fragrans',
        'Cinnamomea',
        'Claytoniana',
        'Hyoseroides',
        'Crassipes',
        'Violacea',
        'Arboreum',
        'Caeruleum',
        'Procumbens',
        'Terminalis',
        'Pandorana',
        'Virgatum',
        'Somniferum',
        'Asarifolia',
        'Persica',
        'Integrifolium',
        'Tricuspidata',
        'Incarnata',
        'Peltatum',
        'Hortorum',
        'Alopecuroides',
        'Setaceum',
        'Canescens',
        'Cobaea',
        'Atriplicifolia',
        'Borbonia',
        'Palustris',
        'Crispum',
        'Hybrida',
        'Bipinnatifida',
        'Purshii',
        'Arundarinacea',
        'Arundinaera',
        'Coccineus',
        'Hexagonoptera',
        'Sachalinense',
        'Amurense',
        'Coronarius',
        'Delavayi',
        'Inodorus',
        'Lemoinei',
        'Divaricata',
        'Glaberrima',
        'Paniculata',
        'Stolonifera',
        'Subulata',
        'Glabra',
        'Serrulata',
        'Villosa',
        'Fraseri',
        'Opulifolius',
        'Abies',
        'Asperata',
        'Glauca',
        'Mariana',
        'Omorika',
        'Ailanthoides',
        'Floribunda',
        'Officnarum',
        'Anisum',
        'Caerulea',
        'Baksiana',
        'Bungeana',
        'Cembra',
        'Densiflora',
        'Echinata',
        'Edulis',
        'Flexilis',
        'Heldreichii',
        'Korariensis',
        'Monticola',
        'Mugo',
        'Palustris',
        'Parviflora',
        'Peucea',
        'Piaster',
        'Ponderosa',
        'Rigida',
        'Strobus',
        'Sylvestris',
        'Taeda',
        'Thunbergiana',
        'Wallichiana',
        'Yunnanensis',
        'Stratiotes',
        'Tobira',
        'Psycodes',
        'Ciliaris',
        'Orbiculata',
        'Acerifolia',
        'Argentatus',
        'Fosteri',
        'Auricoma',
        'Variegatus',
        'Auriculata',
        'Macrophyllus',
        'Peltatum',
        'Ophioglossoides',
        'Curtissii',
        'Lutea',
        'Biflorum',
        'Cuspidatum',
        'Hydropiper',
        'Polypodioides',
        'Polyblepharum',
        'Setiferum',
        'Cordata',
        'Deltoides',
        'Recta',
        'Tridentata',
        'Sanguisorba',
        'Veris',
        'Poluantha',
        'Vulgaris',
        'Webbiana',
        'Cerasifera',
        'Glandulosa',
        'Laurocerasus',
        'Lusitonica',
        'Mume',
        'Persica',
        'Sargentii',
        'Serotina',
        'Serrula',
        'Serrulata',
        'Subhirtella',
        'Bilireana',
        'Cistena',
        'Yedoensis',
        'Jaempferx',
        'Amabilis',
        'Stenoptera',
        'Tartarinowii',
        'Corymbosa',
        'Hispidus',
        'Muticum',
        'Coccinea',
        'Koidzumii',
        'Elliptica',
        'Rotundifolia',
        'Hastata',
        'Lungua',
        'Calleryana',
        'Pyrifolia',
        'Pennata',
        'Acutissima',
        'Alba',
        'Dentala',
        'Falcata',
        'Franinetto',
        'Geminata',
        'Hemisphaerica',
        'Imbricaria',
        'Lyrata',
        'Margarattiae',
        'Merilandica',
        'Mniima',
        'Oglethorpensis',
        'Palustris',
        'Prinus',
        'Rubra',
        'Flammula',
        'Pinnata',
        'Franguloides',
        'Cathartica',
        'Umbellata',
        'Delacourii',
        'Atrosanguineus',
        'Arborescens',
        'Bakeri',
        'Calendulaceum',
        'Canescens',
        'Catawbiense',
        'Eriocarpum',
        'Flammeum',
        'Indicum',
        'Kaempferi',
        'Kuisianum',
        'Mucronulatum',
        'Periclymenoides',
        'Prinophyllum',
        'Prunifolium',
        'Roseum',
        'Vaseyi',
        'Viscosum',
        'Yakusimanum',
        'Aromatica',
        'Copallina',
        'Glabra',
        'Typhina',
        'Hispida',
        'Pseudoacacia',
        'Calcyinoides',
        'Odoratus',
        'Fulgida',
        'Laciniata',
        'Hastatulus',
        'Aculeatus',
        'Equisentiforumis',
        'Graveolens',
        'Palmetto',
        'Angularis',
        'Ravennae',
        'Fasciculata',
        'Babylonica',
        'Caprea',
        'Chaenomeloides',
        'Discolor',
        'Matsudana',
        'Sachhalinensis',
        'Sinata',
        'Elegans',
        'Farinacea',
        'Leucantha',
        'Lyrata',
        'Sclarea',
        'Uliginosa',
        'Superba',
        'Aurantiaca',
        'Chmaecyparissus',
        'Ocymoides',
        'Ruschifolia',
        'Alata',
        'Drummondii',
        'Psittaccina',
        'Albidum',
        'Cernuus',
        'Stolonifera',
        'Atropurpurea',
        'Caucasica',
        'Aemula',
        'Hydrengeoides',
        'Campanulata',
        'Laustris',
        'Incana',
        'Intergrifolia',
        'Serrata',
        'Makinoi',
        'Spectabile',
        'Spurium',
        'Telepnoides',
        'Ternatum',
        'Tetractinum',
        'Aureus',
        'Giagenteum',
        'Punicea',
        'Pallida',
        'Galacifolia',
        'Intergrifolium',
        'Terebinthinaceum',
        'Rehdreriana',
        'Angustifolium',
        'Jasminoides',
        'Juncea',
        'Nemoralis',
        'Uliginosa',
        'Alnifolia',
        'Aucuparia',
        'Pectinata',
        'Junceum',
        'Marilandica',
        'Albiflora',
        'Cantoniensis',
        'Fritschiana',
        'Plenaflora',
        'Prunifloria',
        'Trilobata',
        'Billiardii',
        'Bumalda',
        'Cernua',
        'Tuberosa',
        'Sibiricus',
        'Airoides',
        'Tenuifolia',
        'Hexaphylla',
        'Lutea',
        'Rostrata',
        'Ovata',
        'Monadelpha',
        'Pseudocamellia',
        'Tenacissima',
        'Amplexifolius',
        'Dyerianus',
        'Corda',
        'Tinctoria',
        'Laciniata',
        'Oblata',
        'Patula',
        'Pekinensis',
        'Persica',
        'Patula',
        'Temurfolia',
        'Cruptmerioides',
        'Ramossisima',
        'Parthenium',
        'Distichum',
        'Baccata',
        'Cuspiduta',
        'Gymnathera',
        'Daelbata',
        'Aquilegifolium',
        'Dasycarpum',
        'Hexagonoptera',
        'Villosa',
        'Occidentalis',
        'Plicata',
        'Gregorii',
        'Praecox',
        'Serpyllum',
        'Cordifolia',
        'Cordata',
        'Mongolica',
        'Platyphyllois',
        'Eychlora',
        'Rotundifolia',
        'Vernix',
        'Asiaticum',
        'Subaspera',
        'Catesbaei',
        'Cunaetum',
        'Luyeum',
        'Pusillum',
        'Sessile',
        'Stamineum',
        'Undulatum',
        'Majus',
        'Peregrinum',
        'Carpinifolia',
        'Parvifolia',
        'Pumila',
        'Sessilifolia',
        'Arboreum',
        'Corymbosum',
        'Macrocarpon',
        'Viride',
        'Thapsus',
        'Canadensis',
        'Rigida',
        'Tenuisecta',
        'Noveboracensis',
        'Peduncularis',
        'Awabuki',
        'Casiinoides',
        'Dentatum',
        'Dilatatum',
        'Erosum',
        'Nudum',
        'Plicatum',
        'Prunifolium',
        'Rufidulum',
        'Setigerum',
        'Bodnantense',
        'Cornuta',
        'Lineariloba',
        'Sororia',
        'Negundo',
        'Fragarioides',
        'Ciraeensis',
        'Macrostachya',
        'Obtusa',
        'Simplicissima',
        'Crinodonna',
        'Oloifolia',
        'Harrimaniae',
        'Aethoipica',
        'Haahenana',
        'Jujuba',
    ];
    {
        names = `${sample(nm1)} ${sample(nm2)}`;
        return names;
    }
}
