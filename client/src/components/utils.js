export function getParsedDate(strDate) {
  if (strDate === null) {
    return null;
  } else {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]);
  // alert(date);
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  date =  yyyy + "-" + mm + "-" + dd;
  return date.toString();
}
}
export const IROList = [
  { id: 'null', name: 'Unassigned'},
  { id: 'iro01', name: 'MCMC Services'},
  { id: 'iro02', name: 'Medical Consultants Network'},
  { id: 'iro03', name: 'H.H.C Group' },
  { id: 'iro04', name: 'HHC Group' },
  { id: 'iro05', name: 'MET Healthcare Solutions'},
  { id: 'iro06', name: 'NMR'},
  { id: 'iro07', name: 'Network Medical Review' },
  { id: 'iro08', name: 'MCN' },
  { id: 'iro09', name: 'National Medical Review' },
]
export const insurerList = [
  { id: 'ins01', name: 'Blue Cross'},
  { id: 'ins02', name: 'Golden Rule'},
  { id: 'ins03', name: 'Bright Health' },
  { id: 'ins04', name: 'Cigna' },
  { id: 'ins05', name: 'Blue Cross'},
  { id: 'ins06', name: 'Golden Rule'},
  { id: 'ins07', name: 'Bright Health' },
  { id: 'ins08', name: 'Cigna' },
  { id: 'ins09', name: 'Federated Insurance'},
  { id: 'ins10', name: 'Golden Rule'},
  { id: 'ins11', name: 'Bright Health' },
  { id: 'ins12', name: 'National Health Insurance Company' },
]
export const decisionOptions = ['No Decision Yet', 'Upheld', 'Overturned', 'Partially Overturned'];

const iroListOriginal = ['UNASSIGNED', 'CoreVisory', 'Maximus', 'C2C', 'HHC Group', 'Claims Eval', 'NMR', 'MRIoA', 'MCN', 'MET', 'ProPeer']
const insurerListOriginal = ['BCBS', 'United', 'Aetna', 'Golden Rule', 'Medica', 'HMR', 'Oscar', 'Centene'];

export const Checkbox = ({ id, name, checked, onChangeFunction }) =>
(
  <div>
  <input
    type = "checkbox"
    id = { id }
    name = { name }
    checked = { checked }
    onChange={ onChangeFunction }
  />
  </div>
);