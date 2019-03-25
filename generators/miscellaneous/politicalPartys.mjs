import sample from 'lodash/sample';

export default function politicalPartys() {
  let names;
  const nm1 = ['Advanced', 'Collective', 'Common', 'Constitutional', 'Contemporary', 'Eastern', 'Extremist', 'Fanatical', 'Federal', 'First', 'Free', 'Global', 'Independent', 'Industrial', 'International', 'Lawful', 'Leading', 'Liberal', 'Moderate', 'Modern', 'National', 'Neo', 'New', 'Northern', 'Organized', 'Patriotic', 'Peaceful', 'People\'s', 'Permanent', 'Prime', 'Progressive', 'Radical', 'Rational', 'Revolutionary', 'Social', 'Southern', 'Sovereign', 'Traditional', 'Unconditional', 'Undivided', 'Unified', 'United', 'Universal', 'Vocal', 'Western', 'World', '', '', ''];
  const nm2 = ['Abolition', 'Action', 'Administration', 'Advancement', 'Affinity', 'Agrarian', 'Alliance', 'Amendment', 'Animal', 'Appreciation', 'Autocrat', 'Choice', 'Citizens', 'Civic', 'Civil Rights', 'Coalition', 'Communion', 'Communist', 'Community', 'Compromise', 'Conservative', 'Constitution', 'Defiance', 'Democratic', 'Denizen', 'Diligence', 'Earth', 'Egalitarian', 'Egalitarianism', 'Egalitarion', 'Emancipation', 'Enterprise', 'Equality', 'Equilibrium', 'Evaluation', 'Evolution', 'Family', 'Fascist', 'Fatherland', 'Federation', 'Formation', 'Freedom', 'Future', 'Green', 'Homeland', 'Honesty', 'Household', 'Humanitarian', 'Identity', 'Immunity', 'Impartiality', 'Independence', 'Industry', 'Integrity', 'Isolation', 'Justice', 'Labor', 'Law', 'Left', 'Left Wing', 'Legislation', 'Liberation', 'Libertarian', 'Liberty', 'Life', 'Loyalist', 'Monarchist', 'Motherland', 'Nation', 'Nationalist', 'Nature', 'Operation', 'Opportunity', 'Pacifism', 'Pacifist', 'Parliamentary', 'Patriot', 'Peace', 'People', 'Preservation', 'Privilege', 'Probation', 'Progress', 'Progression', 'Prohibition', 'Proposition', 'Prosperity', 'Protection', 'Reconciliation', 'Red', 'Reformation', 'Regulation', 'Rehabilitation', 'Renovation', 'Republican', 'Resistance', 'Respect', 'Right', 'Right Wing', 'Science', 'Segregation', 'Separation', 'Separatist', 'Socialist', 'Solidarity', 'State', 'Taxpayer', 'Theocratic', 'Transformation', 'Trust', 'Uniformity', 'Unionist', 'Unity', 'Voice', 'Voter', 'Welfare', 'Workers', 'Working Class'];
  const nm3 = ['Party', 'League', 'Movement', 'Group', 'Union', 'Coalition', 'Party', 'Party'];
  {
    names = `${sample(nm1)} ${sample(nm2)} ${sample(nm3)}`;
    return names;
  }
}
