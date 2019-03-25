export default function puritans() {
  let names;
  let rnd;
  let rnd2;
  const nm1 = ['Abstinence', 'Abuse-Not', 'Abuse-not', 'Accepted',
    'Aid-On-High', 'Amity', 'Anger', 'Approved', 'Arise', 'Ashes',
    'Assurance', 'Battalion', 'Be-Courteous', 'Be-Faithful', 'Be-Strong',
    'Be-Thankful', 'Benevolence', 'Belief', 'Beloved', 'Buried', 'Called',
    'Charity', 'Clarity', 'Clemency', 'Comfort', 'Concord', 'Confidence',
    'Consider', 'Constance', 'Constant', 'Continent', 'Creature', 'Credence',
    'Deliverance', 'Delivery', 'Depend', 'Desire', 'Die-Well', 'Diffidence',
    'Diligence', 'Discipline', 'Discretion', 'Donation', 'Dust', 'Earth',
    'Elected', 'Endure', 'Experience', 'Faint-Not', 'Faint-not', 'Faith',
    'Faith-My-Joy', 'Faithful', 'Fare-Well', 'Farewell', 'Fear', 'Fear-God',
    'Fear-Not', 'Fear-The-Lord', 'Felicity', 'Fidel', 'Fly-Debate',
    'Flye-debate', 'Forsaken', 'Fortune', 'Freegift', 'From-Above',
    'Give-Thanks', 'Given', 'God-Reward', 'Godly', 'Grace', 'Gracious',
    'Handmaid', 'Happy', 'Hate-Evil', 'Hate-Ill', 'Hate-ill', 'Help-On-High',
    'Helpless', 'Honesty', 'Honour', 'Hope', 'Hope-For', 'Hope-Still',
    'Hope-for', 'Hope-still', 'Hopeful', 'Humanity', 'Humble', 'Humiliation',
    'Humility', 'Increase', 'Increased', 'Jolly', 'Joy', 'Joy-Again',
    'Joy-In-Sorrow', 'Just', 'Justice', 'Kill-Sin', 'Kill-sin', 'Lament',
    'Lamentation', 'Learn-Wisdom', 'Liberty', 'Live-Well', 'Lively', 'Love',
    'Love-Well', 'Magnify', 'Magnify', 'Make-Peace', 'Meek', 'Merciful',
    'Mercy', 'More-Fruit', 'More-Trial', 'More-Trial', 'Much-Mercy',
    'Much-Mercy', 'No-Merit', 'No-merit', 'Obedience', 'Obey', 'Original',
    'Pardon', 'Patience', 'Peaceable', 'Perseverance', 'Piety', 'Placidia',
    'Praise-God', 'Preserved', 'Providence', 'Prudence', 'Purific', 'Purify',
    'Recompense', 'Redeemed', 'Redivivia', 'Reformation', 'Rejoice',
    'Remember', 'Renewed', 'Repent', 'Repentance', 'Replenish', 'Resolve',
    'Resolved', 'Restore', 'Return', 'Safe-Deliverance', 'Safe-On-High',
    'Safe-on-Highe', 'Salvation', 'Search-The-Scriptures', 'Seek-Wisdom',
    'Silence', 'Sin-Deny', 'Sincere', 'Small-Hope', 'Sorry-For-Sin',
    'Sorry-for-sin', 'Stand-Fast-On-High', 'Steadfast', 'Submit', 'Supply',
    'Temperance', 'Tenacious', 'Thankful', 'Thankful', 'Thanks',
    'The-Lord-Is-Near', 'The-Peace-Of-God', 'Tribulation', 'Trinity', 'Troth',
    'Truth', 'Unfeigned', 'Unity', 'Vanity', 'Verity', 'Victory', 'Virtue',
    'Vitalis', 'Weakly', 'Wealthy', 'Weep-Not', 'What-God-Will', 'Wrestling',
    'Zeal-For-The-Lord', 'Zeal-Of-The-Land'];
  const nm2 = ['Abbot', 'Alleine', 'Ames', 'Appletree', 'Arrowsmith', 'Ashe',
    'Baillie', 'Ball', 'Barrowe', 'Baxter', 'Baylie', 'Bayly', 'Beard',
    'Bending', 'Bernard', 'Blatcher', 'Bolton', 'Bond', 'Boston', 'Bradford',
    'Bradshaw', 'Bradstreet', 'Brewster', 'Bridge', 'Brinsley', 'Brooks',
    'Broughton', 'Browne', 'Bulkley', 'Bull', 'Bunyan', 'Burges', 'Burgess',
    'Burroughs', 'Burton', 'Buttres', 'Byfield', 'Calamy', 'Capel', 'Carter',
    'Cartwright', 'Caryl', 'Case', 'Cawdrey', 'Cawton', 'Chaderton',
    'Charnock', 'Chawncey', 'Cheeseman', 'Cheynell', 'Coleman', 'Collyer',
    'Corbet', 'Cotton', 'Coupard', 'Coverdale', 'Cromwell', 'Danforth',
    'Darrell', 'Davenport', 'Dent', 'Dod', 'Doddridge', 'Downame', 'Downing',
    'Dudley', 'Durant', 'Dury', 'Eaton', 'Edwards', 'Egerrton', 'Ekins',
    'Engaine', 'Fenn', 'Field', 'Fiennes', 'Fish', 'Flavel', 'Fox', 'Foxe',
    'French', 'Fulke', 'Gataker', 'Gilby', 'Gillespie', 'Gilpin', 'Goodman',
    'Goodwin', 'Gouge', 'Greenham', 'Greenhill', 'Greenwood', 'Guthrie',
    'Hake', 'Harmer', 'Harris', 'Harvard', 'Hastings', 'Henderson', 'Henley',
    'Henry', 'Herle', 'Heyrick', 'Hickes', 'Higginson', 'Hildersham', 'Hill',
    'Hinde', 'Hooker', 'Hopkinson', 'Howe', 'Hoyle', 'Humphrey', 'Hutchinson',
    'Ireton', 'Janeway', 'John', 'Johnson', 'Kane', 'Larkford', 'Lathrop',
    'Leighton', 'Ley', 'Lightfoot', 'Llwyd', 'Love', 'Lower', 'Manton',
    'Marbury', 'Marshall', 'Mather', 'Mathews', 'Maynard', 'Mayo', 'Mede',
    'Mildmay', 'Milton', 'Moody', 'More', 'Murphy', 'Newcomen', 'Norton',
    'Noyes', 'Nye', 'Outtered', 'Owen', 'Palmer', 'Panckhurst', 'Parker',
    'Peedle', 'Penry', 'Perkins', 'Perne', 'Phelps', 'Pimple', 'Poole',
    'Pougher', 'Preston', 'Rainolds', 'Reynolds', 'Rice', 'Rich', 'Robinson',
    'Rogers', 'Rowlandson', 'Rutherford', 'Sampson', 'Scudder', 'Seaman',
    'Sedgwick', 'Sence', 'Shepard', 'Shotbolt', 'Sibbes', 'Simpson', 'Smart',
    'Spurstowe', 'Staunton', 'Sterry', 'Stoddard', 'Sykes', 'Taylor', 'Teate',
    'Temple', 'Thorpe', 'Titus', 'Travers', 'Tregosse', 'Twisse', 'Udal',
    'Upsall', 'Vincent', 'Vines', 'Vynall', 'Walker', 'Wallington', 'Wallis',
    'Ward', 'Water', 'Watson', 'Watts', 'Weeks', 'Wentworth', 'Whathing',
    'Wheelwright', 'Whitaker', 'White', 'Whitehead', 'Whittingham',
    'Wigginton', 'Wigglesworth', 'Williams', 'Wilson', 'Winthrop', 'Wither',
    'Wood', 'Woodbridge', 'Woodford', 'Young'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = `${nm1[rnd]} ${nm2[rnd2]}`;
    nm1.splice(rnd, 1);
    nm2.splice(rnd2, 1);
    return names;
  }
}
