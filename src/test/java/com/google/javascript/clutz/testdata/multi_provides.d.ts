// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare namespace ಠ_ಠ.clutz.multi_provides.a {
  let val : number ;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare module 'goog:multi_provides.a' {
  import a = ಠ_ಠ.clutz.multi_provides.a;
  export = a;
  const __clutz_actual_path: 'google3/third_party/java_src/clutz/src/test/java/com/google/javascript/clutz/testdata/multi_provides';
}
declare module 'google3/third_party/java_src/clutz/src/test/java/com/google/javascript/clutz/testdata/multi_provides' {
  import a = ಠ_ಠ.clutz.multi_provides.a;
  export = a;
  const __clutz_actual_namespace: 'multi_provides.a';
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare namespace ಠ_ಠ.clutz.multi_provides.a.b.c {
  let three : string ;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare module 'goog:multi_provides.a.b.c' {
  import c = ಠ_ಠ.clutz.multi_provides.a.b.c;
  export = c;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare namespace ಠ_ಠ.clutz.multi_provides.a.b.c {
  class Two {
    private noStructuralTyping_multi_provides_a_b_c_Two : any;
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/multi_provides.js
declare module 'goog:multi_provides.a.b.c.Two' {
  import Two = ಠ_ಠ.clutz.multi_provides.a.b.c.Two;
  export default Two;
}
