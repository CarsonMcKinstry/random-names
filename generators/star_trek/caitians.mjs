import sample from 'lodash/sample';

export default function caitians() {
  let names;
  const nm1 = ['C\'R', 'C\'T', 'C\'', 'C\'M', 'C\'N', 'C\'Tr', 'Cr', 'Cr\'', 'Cs', 'H\'R', 'H\'M', 'H\'N', 'H\'', 'Hr', 'Hs', 'Kr', 'K\'R', 'K\'M', 'K\'N', 'K\'Gr', 'K\'Tr', 'M\'Gr', 'M\'M', 'M\'N', 'M\'R', 'M\'T', 'M\'Tr', 'M\'', 'Mr', 'Mr\'', 'P\'R', 'P\'M', 'P\'N', 'P\'Gr', 'Pr', 'P\'T', 'R\'M', 'Rr', 'R\'R', 'R\'N', 'R\'T', 'R\'Tr', 'S\'T', 'S\'Gr', 'S\'M', 'S\'N', 'S\'R', 'Sh\'', 'Sr', 'Sh', 'Sr\''];
  const nm2 = ['aal', 'aarra', 'aia', 'aiarr', 'ala', 'all', 'aow', 'ara', 'arash', 'arr', 'ash', 'asha', 'ashar', 'asi', 'au', 'earr', 'eia', 'elar', 'ell', 'elle', 'era', 'erah', 'eras', 'erl', 'erow', 'err', 'esint', 'esirr', 'ess', 'ia', 'iarr', 'ierr', 'iia', 'ill', 'ille', 'ira', 'iras', 'iri', 'irl', 'irr', 'isarr', 'ish', 'isil', 'iss', 'oa', 'oaw', 'oia', 'ol', 'oll', 'ora', 'orash', 'oren', 'ori', 'orish', 'orr', 'orri', 'osin', 'ow', 'uaw', 'ular', 'ulish', 'ull', 'uran', 'urin', 'uris', 'urr', 'urs', 'us', 'usar', 'uul', 'uur', 'uuras', 'uuri'];
  {
    names = sample(nm1) + sample(nm2);
    return names;
  }
}
