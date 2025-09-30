
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model universityusers
 * 
 */
export type universityusers = $Result.DefaultSelection<Prisma.$universityusersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender_type: {
  Female: 'Female',
  Male: 'Male'
};

export type gender_type = (typeof gender_type)[keyof typeof gender_type]


export const advisor_type: {
  Yes: 'Yes',
  No: 'No'
};

export type advisor_type = (typeof advisor_type)[keyof typeof advisor_type]


export const regions_type: {
  Addis_Ababa: 'Addis_Ababa',
  Dire_Dawa: 'Dire_Dawa',
  Tigray: 'Tigray',
  Afar: 'Afar',
  Amhara: 'Amhara',
  Oromia: 'Oromia',
  Somali: 'Somali',
  Benishangul_Gumuz: 'Benishangul_Gumuz',
  SNNPR: 'SNNPR',
  Sidama: 'Sidama',
  South_West_Ethiopia_Peoples_Region: 'South_West_Ethiopia_Peoples_Region',
  Central_Ethiopia_Region: 'Central_Ethiopia_Region',
  South_Ethiopia_Region: 'South_Ethiopia_Region',
  Harari: 'Harari',
  Not_Specified: 'Not_Specified'
};

export type regions_type = (typeof regions_type)[keyof typeof regions_type]


export const languages_type: {
  Amharic: 'Amharic',
  Oromifa: 'Oromifa',
  Tigrigna: 'Tigrigna',
  Not_Specified: 'Not_Specified',
  English: 'English',
  Other: 'Other'
};

export type languages_type = (typeof languages_type)[keyof typeof languages_type]


export const disability_type: {
  None: 'None',
  Physical: 'Physical',
  Visual: 'Visual',
  Hearing: 'Hearing',
  Intellectual: 'Intellectual',
  Psychosocial: 'Psychosocial',
  Other: 'Other'
};

export type disability_type = (typeof disability_type)[keyof typeof disability_type]


export const participation_type: {
  Gbi_Gubaye_Secretariat: 'Gbi_Gubaye_Secretariat',
  Audit_and_Inspection_Section: 'Audit_and_Inspection_Section',
  Education_and_Apostolic_Service_Section: 'Education_and_Apostolic_Service_Section',
  Accounting_and_Assets_Section: 'Accounting_and_Assets_Section',
  Development_and_Income_Collection_Section: 'Development_and_Income_Collection_Section',
  Languages_and_Special_Interests_Section: 'Languages_and_Special_Interests_Section',
  Hymns_and_Arts_Section: 'Hymns_and_Arts_Section',
  Planning_Monitoring_Reports_and_Information_Management_Section: 'Planning_Monitoring_Reports_and_Information_Management_Section',
  Professional_and_Community_Development_Section: 'Professional_and_Community_Development_Section',
  Batch_and_Programs_Coordination_Section: 'Batch_and_Programs_Coordination_Section',
  Member_Care_Advice_and_Capacity_Building_Section: 'Member_Care_Advice_and_Capacity_Building_Section',
  None: 'None'
};

export type participation_type = (typeof participation_type)[keyof typeof participation_type]


export const role_type: {
  Member: 'Member',
  ClassSecretary: 'ClassSecretary',
  ClassTeamLead: 'ClassTeamLead',
  ClassManager: 'ClassManager',
  SubclassSecretary: 'SubclassSecretary',
  SubclassTeamLead: 'SubclassTeamLead',
  SubclassManager: 'SubclassManager',
  None: 'None'
};

export type role_type = (typeof role_type)[keyof typeof role_type]


export const sponsorship_type: {
  Government: 'Government',
  Self_Sponsored: 'Self_Sponsored',
  Scholarship: 'Scholarship'
};

export type sponsorship_type = (typeof sponsorship_type)[keyof typeof sponsorship_type]

}

export type gender_type = $Enums.gender_type

export const gender_type: typeof $Enums.gender_type

export type advisor_type = $Enums.advisor_type

export const advisor_type: typeof $Enums.advisor_type

export type regions_type = $Enums.regions_type

export const regions_type: typeof $Enums.regions_type

export type languages_type = $Enums.languages_type

export const languages_type: typeof $Enums.languages_type

export type disability_type = $Enums.disability_type

export const disability_type: typeof $Enums.disability_type

export type participation_type = $Enums.participation_type

export const participation_type: typeof $Enums.participation_type

export type role_type = $Enums.role_type

export const role_type: typeof $Enums.role_type

export type sponsorship_type = $Enums.sponsorship_type

export const sponsorship_type: typeof $Enums.sponsorship_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universityusers`: Exposes CRUD operations for the **universityusers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universityusers
    * const universityusers = await prisma.universityusers.findMany()
    * ```
    */
  get universityusers(): Prisma.universityusersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    admin: 'admin',
    universityusers: 'universityusers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "universityusers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      universityusers: {
        payload: Prisma.$universityusersPayload<ExtArgs>
        fields: Prisma.universityusersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.universityusersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.universityusersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          findFirst: {
            args: Prisma.universityusersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.universityusersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          findMany: {
            args: Prisma.universityusersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>[]
          }
          create: {
            args: Prisma.universityusersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          createMany: {
            args: Prisma.universityusersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.universityusersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>[]
          }
          delete: {
            args: Prisma.universityusersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          update: {
            args: Prisma.universityusersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          deleteMany: {
            args: Prisma.universityusersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.universityusersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.universityusersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>[]
          }
          upsert: {
            args: Prisma.universityusersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universityusersPayload>
          }
          aggregate: {
            args: Prisma.UniversityusersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversityusers>
          }
          groupBy: {
            args: Prisma.universityusersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityusersGroupByOutputType>[]
          }
          count: {
            args: Prisma.universityusersCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityusersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: adminOmit
    universityusers?: universityusersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userid: number | null
  }

  export type UserSumAggregateOutputType = {
    userid: number | null
  }

  export type UserMinAggregateOutputType = {
    userid: number | null
    studentid: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    gender: $Enums.gender_type | null
    baptismalname: string | null
    phone: string | null
    birthdate: Date | null
    useremail: string | null
    nationality: string | null
    isphysicallydisabled: $Enums.disability_type | null
    zonename: string | null
    mothertongue: $Enums.languages_type | null
    createdAt: Date | null
    region: $Enums.regions_type | null
    telegram_username: string | null
  }

  export type UserMaxAggregateOutputType = {
    userid: number | null
    studentid: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    gender: $Enums.gender_type | null
    baptismalname: string | null
    phone: string | null
    birthdate: Date | null
    useremail: string | null
    nationality: string | null
    isphysicallydisabled: $Enums.disability_type | null
    zonename: string | null
    mothertongue: $Enums.languages_type | null
    createdAt: Date | null
    region: $Enums.regions_type | null
    telegram_username: string | null
  }

  export type UserCountAggregateOutputType = {
    userid: number
    studentid: number
    firstname: number
    middlename: number
    lastname: number
    gender: number
    baptismalname: number
    phone: number
    birthdate: number
    useremail: number
    nationality: number
    isphysicallydisabled: number
    zonename: number
    mothertongue: number
    createdAt: number
    region: number
    telegram_username: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userid?: true
  }

  export type UserSumAggregateInputType = {
    userid?: true
  }

  export type UserMinAggregateInputType = {
    userid?: true
    studentid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    baptismalname?: true
    phone?: true
    birthdate?: true
    useremail?: true
    nationality?: true
    isphysicallydisabled?: true
    zonename?: true
    mothertongue?: true
    createdAt?: true
    region?: true
    telegram_username?: true
  }

  export type UserMaxAggregateInputType = {
    userid?: true
    studentid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    baptismalname?: true
    phone?: true
    birthdate?: true
    useremail?: true
    nationality?: true
    isphysicallydisabled?: true
    zonename?: true
    mothertongue?: true
    createdAt?: true
    region?: true
    telegram_username?: true
  }

  export type UserCountAggregateInputType = {
    userid?: true
    studentid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    gender?: true
    baptismalname?: true
    phone?: true
    birthdate?: true
    useremail?: true
    nationality?: true
    isphysicallydisabled?: true
    zonename?: true
    mothertongue?: true
    createdAt?: true
    region?: true
    telegram_username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userid: number
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname: string
    phone: string
    birthdate: Date
    useremail: string | null
    nationality: string
    isphysicallydisabled: $Enums.disability_type
    zonename: string
    mothertongue: $Enums.languages_type
    createdAt: Date | null
    region: $Enums.regions_type
    telegram_username: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    studentid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    baptismalname?: boolean
    phone?: boolean
    birthdate?: boolean
    useremail?: boolean
    nationality?: boolean
    isphysicallydisabled?: boolean
    zonename?: boolean
    mothertongue?: boolean
    createdAt?: boolean
    region?: boolean
    telegram_username?: boolean
    universityusers?: boolean | User$universityusersArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    studentid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    baptismalname?: boolean
    phone?: boolean
    birthdate?: boolean
    useremail?: boolean
    nationality?: boolean
    isphysicallydisabled?: boolean
    zonename?: boolean
    mothertongue?: boolean
    createdAt?: boolean
    region?: boolean
    telegram_username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    studentid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    baptismalname?: boolean
    phone?: boolean
    birthdate?: boolean
    useremail?: boolean
    nationality?: boolean
    isphysicallydisabled?: boolean
    zonename?: boolean
    mothertongue?: boolean
    createdAt?: boolean
    region?: boolean
    telegram_username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userid?: boolean
    studentid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    gender?: boolean
    baptismalname?: boolean
    phone?: boolean
    birthdate?: boolean
    useremail?: boolean
    nationality?: boolean
    isphysicallydisabled?: boolean
    zonename?: boolean
    mothertongue?: boolean
    createdAt?: boolean
    region?: boolean
    telegram_username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "studentid" | "firstname" | "middlename" | "lastname" | "gender" | "baptismalname" | "phone" | "birthdate" | "useremail" | "nationality" | "isphysicallydisabled" | "zonename" | "mothertongue" | "createdAt" | "region" | "telegram_username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universityusers?: boolean | User$universityusersArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      universityusers: Prisma.$universityusersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      studentid: string
      firstname: string
      middlename: string
      lastname: string
      gender: $Enums.gender_type
      baptismalname: string
      phone: string
      birthdate: Date
      useremail: string | null
      nationality: string
      isphysicallydisabled: $Enums.disability_type
      zonename: string
      mothertongue: $Enums.languages_type
      createdAt: Date | null
      region: $Enums.regions_type
      telegram_username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const userWithUseridOnly = await prisma.user.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    universityusers<T extends User$universityusersArgs<ExtArgs> = {}>(args?: Subset<T, User$universityusersArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userid: FieldRef<"User", 'Int'>
    readonly studentid: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly middlename: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'gender_type'>
    readonly baptismalname: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly useremail: FieldRef<"User", 'String'>
    readonly nationality: FieldRef<"User", 'String'>
    readonly isphysicallydisabled: FieldRef<"User", 'disability_type'>
    readonly zonename: FieldRef<"User", 'String'>
    readonly mothertongue: FieldRef<"User", 'languages_type'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly region: FieldRef<"User", 'regions_type'>
    readonly telegram_username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.universityusers
   */
  export type User$universityusersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    where?: universityusersWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    adminid: number | null
  }

  export type AdminSumAggregateOutputType = {
    adminid: number | null
  }

  export type AdminMinAggregateOutputType = {
    adminid: number | null
    studentid: string | null
    adminusername: string | null
    adminpassword: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    adminid: number | null
    studentid: string | null
    adminusername: string | null
    adminpassword: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    adminid: number
    studentid: number
    adminusername: number
    adminpassword: number
    createdAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    adminid?: true
  }

  export type AdminSumAggregateInputType = {
    adminid?: true
  }

  export type AdminMinAggregateInputType = {
    adminid?: true
    studentid?: true
    adminusername?: true
    adminpassword?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    adminid?: true
    studentid?: true
    adminusername?: true
    adminpassword?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    adminid?: true
    studentid?: true
    adminusername?: true
    adminpassword?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    adminid: number
    studentid: string
    adminusername: string
    adminpassword: string
    createdAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminid?: boolean
    studentid?: boolean
    adminusername?: boolean
    adminpassword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminid?: boolean
    studentid?: boolean
    adminusername?: boolean
    adminpassword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminid?: boolean
    studentid?: boolean
    adminusername?: boolean
    adminpassword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    adminid?: boolean
    studentid?: boolean
    adminusername?: boolean
    adminpassword?: boolean
    createdAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adminid" | "studentid" | "adminusername" | "adminpassword" | "createdAt", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      adminid: number
      studentid: string
      adminusername: string
      adminpassword: string
      createdAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `adminid`
     * const adminWithAdminidOnly = await prisma.admin.findMany({ select: { adminid: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `adminid`
     * const adminWithAdminidOnly = await prisma.admin.createManyAndReturn({
     *   select: { adminid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `adminid`
     * const adminWithAdminidOnly = await prisma.admin.updateManyAndReturn({
     *   select: { adminid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly adminid: FieldRef<"admin", 'Int'>
    readonly studentid: FieldRef<"admin", 'String'>
    readonly adminusername: FieldRef<"admin", 'String'>
    readonly adminpassword: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model universityusers
   */

  export type AggregateUniversityusers = {
    _count: UniversityusersCountAggregateOutputType | null
    _avg: UniversityusersAvgAggregateOutputType | null
    _sum: UniversityusersSumAggregateOutputType | null
    _min: UniversityusersMinAggregateOutputType | null
    _max: UniversityusersMaxAggregateOutputType | null
  }

  export type UniversityusersAvgAggregateOutputType = {
    userid: number | null
    batch: number | null
  }

  export type UniversityusersSumAggregateOutputType = {
    userid: number | null
    batch: number | null
  }

  export type UniversityusersMinAggregateOutputType = {
    userid: number | null
    departmentname: string | null
    sponsorshiptype: $Enums.sponsorship_type | null
    participation: $Enums.participation_type | null
    cafeteriaaccess: boolean | null
    mealcard: string | null
    batch: number | null
    confessionfather: string | null
    advisors: $Enums.advisor_type | null
    role: $Enums.role_type | null
    coursetaken: boolean | null
    holidayincampus: boolean | null
    tookcourse: boolean | null
    ispriestordeacon: boolean | null
  }

  export type UniversityusersMaxAggregateOutputType = {
    userid: number | null
    departmentname: string | null
    sponsorshiptype: $Enums.sponsorship_type | null
    participation: $Enums.participation_type | null
    cafeteriaaccess: boolean | null
    mealcard: string | null
    batch: number | null
    confessionfather: string | null
    advisors: $Enums.advisor_type | null
    role: $Enums.role_type | null
    coursetaken: boolean | null
    holidayincampus: boolean | null
    tookcourse: boolean | null
    ispriestordeacon: boolean | null
  }

  export type UniversityusersCountAggregateOutputType = {
    userid: number
    departmentname: number
    sponsorshiptype: number
    participation: number
    cafeteriaaccess: number
    mealcard: number
    batch: number
    confessionfather: number
    advisors: number
    role: number
    coursetaken: number
    holidayincampus: number
    tookcourse: number
    ispriestordeacon: number
    _all: number
  }


  export type UniversityusersAvgAggregateInputType = {
    userid?: true
    batch?: true
  }

  export type UniversityusersSumAggregateInputType = {
    userid?: true
    batch?: true
  }

  export type UniversityusersMinAggregateInputType = {
    userid?: true
    departmentname?: true
    sponsorshiptype?: true
    participation?: true
    cafeteriaaccess?: true
    mealcard?: true
    batch?: true
    confessionfather?: true
    advisors?: true
    role?: true
    coursetaken?: true
    holidayincampus?: true
    tookcourse?: true
    ispriestordeacon?: true
  }

  export type UniversityusersMaxAggregateInputType = {
    userid?: true
    departmentname?: true
    sponsorshiptype?: true
    participation?: true
    cafeteriaaccess?: true
    mealcard?: true
    batch?: true
    confessionfather?: true
    advisors?: true
    role?: true
    coursetaken?: true
    holidayincampus?: true
    tookcourse?: true
    ispriestordeacon?: true
  }

  export type UniversityusersCountAggregateInputType = {
    userid?: true
    departmentname?: true
    sponsorshiptype?: true
    participation?: true
    cafeteriaaccess?: true
    mealcard?: true
    batch?: true
    confessionfather?: true
    advisors?: true
    role?: true
    coursetaken?: true
    holidayincampus?: true
    tookcourse?: true
    ispriestordeacon?: true
    _all?: true
  }

  export type UniversityusersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universityusers to aggregate.
     */
    where?: universityusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universityusers to fetch.
     */
    orderBy?: universityusersOrderByWithRelationInput | universityusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: universityusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universityusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universityusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned universityusers
    **/
    _count?: true | UniversityusersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniversityusersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniversityusersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityusersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityusersMaxAggregateInputType
  }

  export type GetUniversityusersAggregateType<T extends UniversityusersAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversityusers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversityusers[P]>
      : GetScalarType<T[P], AggregateUniversityusers[P]>
  }




  export type universityusersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: universityusersWhereInput
    orderBy?: universityusersOrderByWithAggregationInput | universityusersOrderByWithAggregationInput[]
    by: UniversityusersScalarFieldEnum[] | UniversityusersScalarFieldEnum
    having?: universityusersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityusersCountAggregateInputType | true
    _avg?: UniversityusersAvgAggregateInputType
    _sum?: UniversityusersSumAggregateInputType
    _min?: UniversityusersMinAggregateInputType
    _max?: UniversityusersMaxAggregateInputType
  }

  export type UniversityusersGroupByOutputType = {
    userid: number
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation: $Enums.participation_type
    cafeteriaaccess: boolean | null
    mealcard: string | null
    batch: number
    confessionfather: string | null
    advisors: $Enums.advisor_type
    role: $Enums.role_type
    coursetaken: boolean
    holidayincampus: boolean | null
    tookcourse: boolean | null
    ispriestordeacon: boolean | null
    _count: UniversityusersCountAggregateOutputType | null
    _avg: UniversityusersAvgAggregateOutputType | null
    _sum: UniversityusersSumAggregateOutputType | null
    _min: UniversityusersMinAggregateOutputType | null
    _max: UniversityusersMaxAggregateOutputType | null
  }

  type GetUniversityusersGroupByPayload<T extends universityusersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityusersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityusersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityusersGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityusersGroupByOutputType[P]>
        }
      >
    >


  export type universityusersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    departmentname?: boolean
    sponsorshiptype?: boolean
    participation?: boolean
    cafeteriaaccess?: boolean
    mealcard?: boolean
    batch?: boolean
    confessionfather?: boolean
    advisors?: boolean
    role?: boolean
    coursetaken?: boolean
    holidayincampus?: boolean
    tookcourse?: boolean
    ispriestordeacon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityusers"]>

  export type universityusersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    departmentname?: boolean
    sponsorshiptype?: boolean
    participation?: boolean
    cafeteriaaccess?: boolean
    mealcard?: boolean
    batch?: boolean
    confessionfather?: boolean
    advisors?: boolean
    role?: boolean
    coursetaken?: boolean
    holidayincampus?: boolean
    tookcourse?: boolean
    ispriestordeacon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityusers"]>

  export type universityusersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    departmentname?: boolean
    sponsorshiptype?: boolean
    participation?: boolean
    cafeteriaaccess?: boolean
    mealcard?: boolean
    batch?: boolean
    confessionfather?: boolean
    advisors?: boolean
    role?: boolean
    coursetaken?: boolean
    holidayincampus?: boolean
    tookcourse?: boolean
    ispriestordeacon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityusers"]>

  export type universityusersSelectScalar = {
    userid?: boolean
    departmentname?: boolean
    sponsorshiptype?: boolean
    participation?: boolean
    cafeteriaaccess?: boolean
    mealcard?: boolean
    batch?: boolean
    confessionfather?: boolean
    advisors?: boolean
    role?: boolean
    coursetaken?: boolean
    holidayincampus?: boolean
    tookcourse?: boolean
    ispriestordeacon?: boolean
  }

  export type universityusersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "departmentname" | "sponsorshiptype" | "participation" | "cafeteriaaccess" | "mealcard" | "batch" | "confessionfather" | "advisors" | "role" | "coursetaken" | "holidayincampus" | "tookcourse" | "ispriestordeacon", ExtArgs["result"]["universityusers"]>
  export type universityusersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type universityusersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type universityusersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $universityusersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "universityusers"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      departmentname: string
      sponsorshiptype: $Enums.sponsorship_type
      participation: $Enums.participation_type
      cafeteriaaccess: boolean | null
      mealcard: string | null
      batch: number
      confessionfather: string | null
      advisors: $Enums.advisor_type
      role: $Enums.role_type
      coursetaken: boolean
      holidayincampus: boolean | null
      tookcourse: boolean | null
      ispriestordeacon: boolean | null
    }, ExtArgs["result"]["universityusers"]>
    composites: {}
  }

  type universityusersGetPayload<S extends boolean | null | undefined | universityusersDefaultArgs> = $Result.GetResult<Prisma.$universityusersPayload, S>

  type universityusersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<universityusersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityusersCountAggregateInputType | true
    }

  export interface universityusersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['universityusers'], meta: { name: 'universityusers' } }
    /**
     * Find zero or one Universityusers that matches the filter.
     * @param {universityusersFindUniqueArgs} args - Arguments to find a Universityusers
     * @example
     * // Get one Universityusers
     * const universityusers = await prisma.universityusers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends universityusersFindUniqueArgs>(args: SelectSubset<T, universityusersFindUniqueArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Universityusers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {universityusersFindUniqueOrThrowArgs} args - Arguments to find a Universityusers
     * @example
     * // Get one Universityusers
     * const universityusers = await prisma.universityusers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends universityusersFindUniqueOrThrowArgs>(args: SelectSubset<T, universityusersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universityusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersFindFirstArgs} args - Arguments to find a Universityusers
     * @example
     * // Get one Universityusers
     * const universityusers = await prisma.universityusers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends universityusersFindFirstArgs>(args?: SelectSubset<T, universityusersFindFirstArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universityusers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersFindFirstOrThrowArgs} args - Arguments to find a Universityusers
     * @example
     * // Get one Universityusers
     * const universityusers = await prisma.universityusers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends universityusersFindFirstOrThrowArgs>(args?: SelectSubset<T, universityusersFindFirstOrThrowArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universityusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universityusers
     * const universityusers = await prisma.universityusers.findMany()
     * 
     * // Get first 10 Universityusers
     * const universityusers = await prisma.universityusers.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const universityusersWithUseridOnly = await prisma.universityusers.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends universityusersFindManyArgs>(args?: SelectSubset<T, universityusersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Universityusers.
     * @param {universityusersCreateArgs} args - Arguments to create a Universityusers.
     * @example
     * // Create one Universityusers
     * const Universityusers = await prisma.universityusers.create({
     *   data: {
     *     // ... data to create a Universityusers
     *   }
     * })
     * 
     */
    create<T extends universityusersCreateArgs>(args: SelectSubset<T, universityusersCreateArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universityusers.
     * @param {universityusersCreateManyArgs} args - Arguments to create many Universityusers.
     * @example
     * // Create many Universityusers
     * const universityusers = await prisma.universityusers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends universityusersCreateManyArgs>(args?: SelectSubset<T, universityusersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universityusers and returns the data saved in the database.
     * @param {universityusersCreateManyAndReturnArgs} args - Arguments to create many Universityusers.
     * @example
     * // Create many Universityusers
     * const universityusers = await prisma.universityusers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universityusers and only return the `userid`
     * const universityusersWithUseridOnly = await prisma.universityusers.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends universityusersCreateManyAndReturnArgs>(args?: SelectSubset<T, universityusersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Universityusers.
     * @param {universityusersDeleteArgs} args - Arguments to delete one Universityusers.
     * @example
     * // Delete one Universityusers
     * const Universityusers = await prisma.universityusers.delete({
     *   where: {
     *     // ... filter to delete one Universityusers
     *   }
     * })
     * 
     */
    delete<T extends universityusersDeleteArgs>(args: SelectSubset<T, universityusersDeleteArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Universityusers.
     * @param {universityusersUpdateArgs} args - Arguments to update one Universityusers.
     * @example
     * // Update one Universityusers
     * const universityusers = await prisma.universityusers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends universityusersUpdateArgs>(args: SelectSubset<T, universityusersUpdateArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universityusers.
     * @param {universityusersDeleteManyArgs} args - Arguments to filter Universityusers to delete.
     * @example
     * // Delete a few Universityusers
     * const { count } = await prisma.universityusers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends universityusersDeleteManyArgs>(args?: SelectSubset<T, universityusersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universityusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universityusers
     * const universityusers = await prisma.universityusers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends universityusersUpdateManyArgs>(args: SelectSubset<T, universityusersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universityusers and returns the data updated in the database.
     * @param {universityusersUpdateManyAndReturnArgs} args - Arguments to update many Universityusers.
     * @example
     * // Update many Universityusers
     * const universityusers = await prisma.universityusers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universityusers and only return the `userid`
     * const universityusersWithUseridOnly = await prisma.universityusers.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends universityusersUpdateManyAndReturnArgs>(args: SelectSubset<T, universityusersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Universityusers.
     * @param {universityusersUpsertArgs} args - Arguments to update or create a Universityusers.
     * @example
     * // Update or create a Universityusers
     * const universityusers = await prisma.universityusers.upsert({
     *   create: {
     *     // ... data to create a Universityusers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Universityusers we want to update
     *   }
     * })
     */
    upsert<T extends universityusersUpsertArgs>(args: SelectSubset<T, universityusersUpsertArgs<ExtArgs>>): Prisma__universityusersClient<$Result.GetResult<Prisma.$universityusersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universityusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersCountArgs} args - Arguments to filter Universityusers to count.
     * @example
     * // Count the number of Universityusers
     * const count = await prisma.universityusers.count({
     *   where: {
     *     // ... the filter for the Universityusers we want to count
     *   }
     * })
    **/
    count<T extends universityusersCountArgs>(
      args?: Subset<T, universityusersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityusersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Universityusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityusersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniversityusersAggregateArgs>(args: Subset<T, UniversityusersAggregateArgs>): Prisma.PrismaPromise<GetUniversityusersAggregateType<T>>

    /**
     * Group by Universityusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universityusersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends universityusersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: universityusersGroupByArgs['orderBy'] }
        : { orderBy?: universityusersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, universityusersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityusersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the universityusers model
   */
  readonly fields: universityusersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for universityusers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__universityusersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the universityusers model
   */
  interface universityusersFieldRefs {
    readonly userid: FieldRef<"universityusers", 'Int'>
    readonly departmentname: FieldRef<"universityusers", 'String'>
    readonly sponsorshiptype: FieldRef<"universityusers", 'sponsorship_type'>
    readonly participation: FieldRef<"universityusers", 'participation_type'>
    readonly cafeteriaaccess: FieldRef<"universityusers", 'Boolean'>
    readonly mealcard: FieldRef<"universityusers", 'String'>
    readonly batch: FieldRef<"universityusers", 'Int'>
    readonly confessionfather: FieldRef<"universityusers", 'String'>
    readonly advisors: FieldRef<"universityusers", 'advisor_type'>
    readonly role: FieldRef<"universityusers", 'role_type'>
    readonly coursetaken: FieldRef<"universityusers", 'Boolean'>
    readonly holidayincampus: FieldRef<"universityusers", 'Boolean'>
    readonly tookcourse: FieldRef<"universityusers", 'Boolean'>
    readonly ispriestordeacon: FieldRef<"universityusers", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * universityusers findUnique
   */
  export type universityusersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter, which universityusers to fetch.
     */
    where: universityusersWhereUniqueInput
  }

  /**
   * universityusers findUniqueOrThrow
   */
  export type universityusersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter, which universityusers to fetch.
     */
    where: universityusersWhereUniqueInput
  }

  /**
   * universityusers findFirst
   */
  export type universityusersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter, which universityusers to fetch.
     */
    where?: universityusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universityusers to fetch.
     */
    orderBy?: universityusersOrderByWithRelationInput | universityusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universityusers.
     */
    cursor?: universityusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universityusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universityusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universityusers.
     */
    distinct?: UniversityusersScalarFieldEnum | UniversityusersScalarFieldEnum[]
  }

  /**
   * universityusers findFirstOrThrow
   */
  export type universityusersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter, which universityusers to fetch.
     */
    where?: universityusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universityusers to fetch.
     */
    orderBy?: universityusersOrderByWithRelationInput | universityusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universityusers.
     */
    cursor?: universityusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universityusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universityusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universityusers.
     */
    distinct?: UniversityusersScalarFieldEnum | UniversityusersScalarFieldEnum[]
  }

  /**
   * universityusers findMany
   */
  export type universityusersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter, which universityusers to fetch.
     */
    where?: universityusersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universityusers to fetch.
     */
    orderBy?: universityusersOrderByWithRelationInput | universityusersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing universityusers.
     */
    cursor?: universityusersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universityusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universityusers.
     */
    skip?: number
    distinct?: UniversityusersScalarFieldEnum | UniversityusersScalarFieldEnum[]
  }

  /**
   * universityusers create
   */
  export type universityusersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * The data needed to create a universityusers.
     */
    data: XOR<universityusersCreateInput, universityusersUncheckedCreateInput>
  }

  /**
   * universityusers createMany
   */
  export type universityusersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many universityusers.
     */
    data: universityusersCreateManyInput | universityusersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * universityusers createManyAndReturn
   */
  export type universityusersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * The data used to create many universityusers.
     */
    data: universityusersCreateManyInput | universityusersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * universityusers update
   */
  export type universityusersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * The data needed to update a universityusers.
     */
    data: XOR<universityusersUpdateInput, universityusersUncheckedUpdateInput>
    /**
     * Choose, which universityusers to update.
     */
    where: universityusersWhereUniqueInput
  }

  /**
   * universityusers updateMany
   */
  export type universityusersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update universityusers.
     */
    data: XOR<universityusersUpdateManyMutationInput, universityusersUncheckedUpdateManyInput>
    /**
     * Filter which universityusers to update
     */
    where?: universityusersWhereInput
    /**
     * Limit how many universityusers to update.
     */
    limit?: number
  }

  /**
   * universityusers updateManyAndReturn
   */
  export type universityusersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * The data used to update universityusers.
     */
    data: XOR<universityusersUpdateManyMutationInput, universityusersUncheckedUpdateManyInput>
    /**
     * Filter which universityusers to update
     */
    where?: universityusersWhereInput
    /**
     * Limit how many universityusers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * universityusers upsert
   */
  export type universityusersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * The filter to search for the universityusers to update in case it exists.
     */
    where: universityusersWhereUniqueInput
    /**
     * In case the universityusers found by the `where` argument doesn't exist, create a new universityusers with this data.
     */
    create: XOR<universityusersCreateInput, universityusersUncheckedCreateInput>
    /**
     * In case the universityusers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<universityusersUpdateInput, universityusersUncheckedUpdateInput>
  }

  /**
   * universityusers delete
   */
  export type universityusersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
    /**
     * Filter which universityusers to delete.
     */
    where: universityusersWhereUniqueInput
  }

  /**
   * universityusers deleteMany
   */
  export type universityusersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universityusers to delete
     */
    where?: universityusersWhereInput
    /**
     * Limit how many universityusers to delete.
     */
    limit?: number
  }

  /**
   * universityusers without action
   */
  export type universityusersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universityusers
     */
    select?: universityusersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universityusers
     */
    omit?: universityusersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universityusersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userid: 'userid',
    studentid: 'studentid',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    gender: 'gender',
    baptismalname: 'baptismalname',
    phone: 'phone',
    birthdate: 'birthdate',
    useremail: 'useremail',
    nationality: 'nationality',
    isphysicallydisabled: 'isphysicallydisabled',
    zonename: 'zonename',
    mothertongue: 'mothertongue',
    createdAt: 'createdAt',
    region: 'region',
    telegram_username: 'telegram_username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    adminid: 'adminid',
    studentid: 'studentid',
    adminusername: 'adminusername',
    adminpassword: 'adminpassword',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UniversityusersScalarFieldEnum: {
    userid: 'userid',
    departmentname: 'departmentname',
    sponsorshiptype: 'sponsorshiptype',
    participation: 'participation',
    cafeteriaaccess: 'cafeteriaaccess',
    mealcard: 'mealcard',
    batch: 'batch',
    confessionfather: 'confessionfather',
    advisors: 'advisors',
    role: 'role',
    coursetaken: 'coursetaken',
    holidayincampus: 'holidayincampus',
    tookcourse: 'tookcourse',
    ispriestordeacon: 'ispriestordeacon'
  };

  export type UniversityusersScalarFieldEnum = (typeof UniversityusersScalarFieldEnum)[keyof typeof UniversityusersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'gender_type'
   */
  export type Enumgender_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_type'>
    


  /**
   * Reference to a field of type 'gender_type[]'
   */
  export type ListEnumgender_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_type[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'disability_type'
   */
  export type Enumdisability_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'disability_type'>
    


  /**
   * Reference to a field of type 'disability_type[]'
   */
  export type ListEnumdisability_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'disability_type[]'>
    


  /**
   * Reference to a field of type 'languages_type'
   */
  export type Enumlanguages_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'languages_type'>
    


  /**
   * Reference to a field of type 'languages_type[]'
   */
  export type ListEnumlanguages_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'languages_type[]'>
    


  /**
   * Reference to a field of type 'regions_type'
   */
  export type Enumregions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'regions_type'>
    


  /**
   * Reference to a field of type 'regions_type[]'
   */
  export type ListEnumregions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'regions_type[]'>
    


  /**
   * Reference to a field of type 'sponsorship_type'
   */
  export type Enumsponsorship_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sponsorship_type'>
    


  /**
   * Reference to a field of type 'sponsorship_type[]'
   */
  export type ListEnumsponsorship_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sponsorship_type[]'>
    


  /**
   * Reference to a field of type 'participation_type'
   */
  export type Enumparticipation_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'participation_type'>
    


  /**
   * Reference to a field of type 'participation_type[]'
   */
  export type ListEnumparticipation_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'participation_type[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'advisor_type'
   */
  export type Enumadvisor_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'advisor_type'>
    


  /**
   * Reference to a field of type 'advisor_type[]'
   */
  export type ListEnumadvisor_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'advisor_type[]'>
    


  /**
   * Reference to a field of type 'role_type'
   */
  export type Enumrole_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role_type'>
    


  /**
   * Reference to a field of type 'role_type[]'
   */
  export type ListEnumrole_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userid?: IntFilter<"User"> | number
    studentid?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    gender?: Enumgender_typeFilter<"User"> | $Enums.gender_type
    baptismalname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    useremail?: StringNullableFilter<"User"> | string | null
    nationality?: StringFilter<"User"> | string
    isphysicallydisabled?: Enumdisability_typeFilter<"User"> | $Enums.disability_type
    zonename?: StringFilter<"User"> | string
    mothertongue?: Enumlanguages_typeFilter<"User"> | $Enums.languages_type
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    region?: Enumregions_typeFilter<"User"> | $Enums.regions_type
    telegram_username?: StringFilter<"User"> | string
    universityusers?: XOR<UniversityusersNullableScalarRelationFilter, universityusersWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    userid?: SortOrder
    studentid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    baptismalname?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    useremail?: SortOrderInput | SortOrder
    nationality?: SortOrder
    isphysicallydisabled?: SortOrder
    zonename?: SortOrder
    mothertongue?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    region?: SortOrder
    telegram_username?: SortOrder
    universityusers?: universityusersOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    studentid?: string
    phone?: string
    useremail?: string
    telegram_username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    middlename?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    gender?: Enumgender_typeFilter<"User"> | $Enums.gender_type
    baptismalname?: StringFilter<"User"> | string
    birthdate?: DateTimeFilter<"User"> | Date | string
    nationality?: StringFilter<"User"> | string
    isphysicallydisabled?: Enumdisability_typeFilter<"User"> | $Enums.disability_type
    zonename?: StringFilter<"User"> | string
    mothertongue?: Enumlanguages_typeFilter<"User"> | $Enums.languages_type
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    region?: Enumregions_typeFilter<"User"> | $Enums.regions_type
    universityusers?: XOR<UniversityusersNullableScalarRelationFilter, universityusersWhereInput> | null
  }, "userid" | "studentid" | "phone" | "useremail" | "telegram_username">

  export type UserOrderByWithAggregationInput = {
    userid?: SortOrder
    studentid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    baptismalname?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    useremail?: SortOrderInput | SortOrder
    nationality?: SortOrder
    isphysicallydisabled?: SortOrder
    zonename?: SortOrder
    mothertongue?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    region?: SortOrder
    telegram_username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"User"> | number
    studentid?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    middlename?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    gender?: Enumgender_typeWithAggregatesFilter<"User"> | $Enums.gender_type
    baptismalname?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    useremail?: StringNullableWithAggregatesFilter<"User"> | string | null
    nationality?: StringWithAggregatesFilter<"User"> | string
    isphysicallydisabled?: Enumdisability_typeWithAggregatesFilter<"User"> | $Enums.disability_type
    zonename?: StringWithAggregatesFilter<"User"> | string
    mothertongue?: Enumlanguages_typeWithAggregatesFilter<"User"> | $Enums.languages_type
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    region?: Enumregions_typeWithAggregatesFilter<"User"> | $Enums.regions_type
    telegram_username?: StringWithAggregatesFilter<"User"> | string
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    adminid?: IntFilter<"admin"> | number
    studentid?: StringFilter<"admin"> | string
    adminusername?: StringFilter<"admin"> | string
    adminpassword?: StringFilter<"admin"> | string
    createdAt?: DateTimeNullableFilter<"admin"> | Date | string | null
  }

  export type adminOrderByWithRelationInput = {
    adminid?: SortOrder
    studentid?: SortOrder
    adminusername?: SortOrder
    adminpassword?: SortOrder
    createdAt?: SortOrderInput | SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    adminid?: number
    studentid?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    adminusername?: StringFilter<"admin"> | string
    adminpassword?: StringFilter<"admin"> | string
    createdAt?: DateTimeNullableFilter<"admin"> | Date | string | null
  }, "adminid" | "studentid">

  export type adminOrderByWithAggregationInput = {
    adminid?: SortOrder
    studentid?: SortOrder
    adminusername?: SortOrder
    adminpassword?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    adminid?: IntWithAggregatesFilter<"admin"> | number
    studentid?: StringWithAggregatesFilter<"admin"> | string
    adminusername?: StringWithAggregatesFilter<"admin"> | string
    adminpassword?: StringWithAggregatesFilter<"admin"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
  }

  export type universityusersWhereInput = {
    AND?: universityusersWhereInput | universityusersWhereInput[]
    OR?: universityusersWhereInput[]
    NOT?: universityusersWhereInput | universityusersWhereInput[]
    userid?: IntFilter<"universityusers"> | number
    departmentname?: StringFilter<"universityusers"> | string
    sponsorshiptype?: Enumsponsorship_typeFilter<"universityusers"> | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFilter<"universityusers"> | $Enums.participation_type
    cafeteriaaccess?: BoolNullableFilter<"universityusers"> | boolean | null
    mealcard?: StringNullableFilter<"universityusers"> | string | null
    batch?: IntFilter<"universityusers"> | number
    confessionfather?: StringNullableFilter<"universityusers"> | string | null
    advisors?: Enumadvisor_typeFilter<"universityusers"> | $Enums.advisor_type
    role?: Enumrole_typeFilter<"universityusers"> | $Enums.role_type
    coursetaken?: BoolFilter<"universityusers"> | boolean
    holidayincampus?: BoolNullableFilter<"universityusers"> | boolean | null
    tookcourse?: BoolNullableFilter<"universityusers"> | boolean | null
    ispriestordeacon?: BoolNullableFilter<"universityusers"> | boolean | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type universityusersOrderByWithRelationInput = {
    userid?: SortOrder
    departmentname?: SortOrder
    sponsorshiptype?: SortOrder
    participation?: SortOrder
    cafeteriaaccess?: SortOrderInput | SortOrder
    mealcard?: SortOrderInput | SortOrder
    batch?: SortOrder
    confessionfather?: SortOrderInput | SortOrder
    advisors?: SortOrder
    role?: SortOrder
    coursetaken?: SortOrder
    holidayincampus?: SortOrderInput | SortOrder
    tookcourse?: SortOrderInput | SortOrder
    ispriestordeacon?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type universityusersWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    AND?: universityusersWhereInput | universityusersWhereInput[]
    OR?: universityusersWhereInput[]
    NOT?: universityusersWhereInput | universityusersWhereInput[]
    departmentname?: StringFilter<"universityusers"> | string
    sponsorshiptype?: Enumsponsorship_typeFilter<"universityusers"> | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFilter<"universityusers"> | $Enums.participation_type
    cafeteriaaccess?: BoolNullableFilter<"universityusers"> | boolean | null
    mealcard?: StringNullableFilter<"universityusers"> | string | null
    batch?: IntFilter<"universityusers"> | number
    confessionfather?: StringNullableFilter<"universityusers"> | string | null
    advisors?: Enumadvisor_typeFilter<"universityusers"> | $Enums.advisor_type
    role?: Enumrole_typeFilter<"universityusers"> | $Enums.role_type
    coursetaken?: BoolFilter<"universityusers"> | boolean
    holidayincampus?: BoolNullableFilter<"universityusers"> | boolean | null
    tookcourse?: BoolNullableFilter<"universityusers"> | boolean | null
    ispriestordeacon?: BoolNullableFilter<"universityusers"> | boolean | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userid">

  export type universityusersOrderByWithAggregationInput = {
    userid?: SortOrder
    departmentname?: SortOrder
    sponsorshiptype?: SortOrder
    participation?: SortOrder
    cafeteriaaccess?: SortOrderInput | SortOrder
    mealcard?: SortOrderInput | SortOrder
    batch?: SortOrder
    confessionfather?: SortOrderInput | SortOrder
    advisors?: SortOrder
    role?: SortOrder
    coursetaken?: SortOrder
    holidayincampus?: SortOrderInput | SortOrder
    tookcourse?: SortOrderInput | SortOrder
    ispriestordeacon?: SortOrderInput | SortOrder
    _count?: universityusersCountOrderByAggregateInput
    _avg?: universityusersAvgOrderByAggregateInput
    _max?: universityusersMaxOrderByAggregateInput
    _min?: universityusersMinOrderByAggregateInput
    _sum?: universityusersSumOrderByAggregateInput
  }

  export type universityusersScalarWhereWithAggregatesInput = {
    AND?: universityusersScalarWhereWithAggregatesInput | universityusersScalarWhereWithAggregatesInput[]
    OR?: universityusersScalarWhereWithAggregatesInput[]
    NOT?: universityusersScalarWhereWithAggregatesInput | universityusersScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"universityusers"> | number
    departmentname?: StringWithAggregatesFilter<"universityusers"> | string
    sponsorshiptype?: Enumsponsorship_typeWithAggregatesFilter<"universityusers"> | $Enums.sponsorship_type
    participation?: Enumparticipation_typeWithAggregatesFilter<"universityusers"> | $Enums.participation_type
    cafeteriaaccess?: BoolNullableWithAggregatesFilter<"universityusers"> | boolean | null
    mealcard?: StringNullableWithAggregatesFilter<"universityusers"> | string | null
    batch?: IntWithAggregatesFilter<"universityusers"> | number
    confessionfather?: StringNullableWithAggregatesFilter<"universityusers"> | string | null
    advisors?: Enumadvisor_typeWithAggregatesFilter<"universityusers"> | $Enums.advisor_type
    role?: Enumrole_typeWithAggregatesFilter<"universityusers"> | $Enums.role_type
    coursetaken?: BoolWithAggregatesFilter<"universityusers"> | boolean
    holidayincampus?: BoolNullableWithAggregatesFilter<"universityusers"> | boolean | null
    tookcourse?: BoolNullableWithAggregatesFilter<"universityusers"> | boolean | null
    ispriestordeacon?: BoolNullableWithAggregatesFilter<"universityusers"> | boolean | null
  }

  export type UserCreateInput = {
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname?: string
    phone: string
    birthdate: Date | string
    useremail?: string | null
    nationality: string
    isphysicallydisabled?: $Enums.disability_type
    zonename?: string
    mothertongue?: $Enums.languages_type
    createdAt?: Date | string | null
    region?: $Enums.regions_type
    telegram_username?: string
    universityusers?: universityusersCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userid?: number
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname?: string
    phone: string
    birthdate: Date | string
    useremail?: string | null
    nationality: string
    isphysicallydisabled?: $Enums.disability_type
    zonename?: string
    mothertongue?: $Enums.languages_type
    createdAt?: Date | string | null
    region?: $Enums.regions_type
    telegram_username?: string
    universityusers?: universityusersUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
    universityusers?: universityusersUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
    universityusers?: universityusersUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userid?: number
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname?: string
    phone: string
    birthdate: Date | string
    useremail?: string | null
    nationality: string
    isphysicallydisabled?: $Enums.disability_type
    zonename?: string
    mothertongue?: $Enums.languages_type
    createdAt?: Date | string | null
    region?: $Enums.regions_type
    telegram_username?: string
  }

  export type UserUpdateManyMutationInput = {
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateInput = {
    studentid: string
    adminusername: string
    adminpassword: string
    createdAt?: Date | string | null
  }

  export type adminUncheckedCreateInput = {
    adminid?: number
    studentid: string
    adminusername: string
    adminpassword: string
    createdAt?: Date | string | null
  }

  export type adminUpdateInput = {
    studentid?: StringFieldUpdateOperationsInput | string
    adminusername?: StringFieldUpdateOperationsInput | string
    adminpassword?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateInput = {
    adminid?: IntFieldUpdateOperationsInput | number
    studentid?: StringFieldUpdateOperationsInput | string
    adminusername?: StringFieldUpdateOperationsInput | string
    adminpassword?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminCreateManyInput = {
    adminid?: number
    studentid: string
    adminusername: string
    adminpassword: string
    createdAt?: Date | string | null
  }

  export type adminUpdateManyMutationInput = {
    studentid?: StringFieldUpdateOperationsInput | string
    adminusername?: StringFieldUpdateOperationsInput | string
    adminpassword?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    adminid?: IntFieldUpdateOperationsInput | number
    studentid?: StringFieldUpdateOperationsInput | string
    adminusername?: StringFieldUpdateOperationsInput | string
    adminpassword?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type universityusersCreateInput = {
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation?: $Enums.participation_type
    cafeteriaaccess?: boolean | null
    mealcard?: string | null
    batch: number
    confessionfather?: string | null
    advisors?: $Enums.advisor_type
    role?: $Enums.role_type
    coursetaken?: boolean
    holidayincampus?: boolean | null
    tookcourse?: boolean | null
    ispriestordeacon?: boolean | null
    User: UserCreateNestedOneWithoutUniversityusersInput
  }

  export type universityusersUncheckedCreateInput = {
    userid: number
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation?: $Enums.participation_type
    cafeteriaaccess?: boolean | null
    mealcard?: string | null
    batch: number
    confessionfather?: string | null
    advisors?: $Enums.advisor_type
    role?: $Enums.role_type
    coursetaken?: boolean
    holidayincampus?: boolean | null
    tookcourse?: boolean | null
    ispriestordeacon?: boolean | null
  }

  export type universityusersUpdateInput = {
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
    User?: UserUpdateOneRequiredWithoutUniversityusersNestedInput
  }

  export type universityusersUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type universityusersCreateManyInput = {
    userid: number
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation?: $Enums.participation_type
    cafeteriaaccess?: boolean | null
    mealcard?: string | null
    batch: number
    confessionfather?: string | null
    advisors?: $Enums.advisor_type
    role?: $Enums.role_type
    coursetaken?: boolean
    holidayincampus?: boolean | null
    tookcourse?: boolean | null
    ispriestordeacon?: boolean | null
  }

  export type universityusersUpdateManyMutationInput = {
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type universityusersUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumgender_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeFilter<$PrismaModel> | $Enums.gender_type
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumdisability_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.disability_type | Enumdisability_typeFieldRefInput<$PrismaModel>
    in?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdisability_typeFilter<$PrismaModel> | $Enums.disability_type
  }

  export type Enumlanguages_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.languages_type | Enumlanguages_typeFieldRefInput<$PrismaModel>
    in?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumlanguages_typeFilter<$PrismaModel> | $Enums.languages_type
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumregions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.regions_type | Enumregions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumregions_typeFilter<$PrismaModel> | $Enums.regions_type
  }

  export type UniversityusersNullableScalarRelationFilter = {
    is?: universityusersWhereInput | null
    isNot?: universityusersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    userid?: SortOrder
    studentid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    baptismalname?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    useremail?: SortOrder
    nationality?: SortOrder
    isphysicallydisabled?: SortOrder
    zonename?: SortOrder
    mothertongue?: SortOrder
    createdAt?: SortOrder
    region?: SortOrder
    telegram_username?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userid?: SortOrder
    studentid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    baptismalname?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    useremail?: SortOrder
    nationality?: SortOrder
    isphysicallydisabled?: SortOrder
    zonename?: SortOrder
    mothertongue?: SortOrder
    createdAt?: SortOrder
    region?: SortOrder
    telegram_username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userid?: SortOrder
    studentid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    gender?: SortOrder
    baptismalname?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    useremail?: SortOrder
    nationality?: SortOrder
    isphysicallydisabled?: SortOrder
    zonename?: SortOrder
    mothertongue?: SortOrder
    createdAt?: SortOrder
    region?: SortOrder
    telegram_username?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumgender_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeWithAggregatesFilter<$PrismaModel> | $Enums.gender_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_typeFilter<$PrismaModel>
    _max?: NestedEnumgender_typeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumdisability_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.disability_type | Enumdisability_typeFieldRefInput<$PrismaModel>
    in?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdisability_typeWithAggregatesFilter<$PrismaModel> | $Enums.disability_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdisability_typeFilter<$PrismaModel>
    _max?: NestedEnumdisability_typeFilter<$PrismaModel>
  }

  export type Enumlanguages_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.languages_type | Enumlanguages_typeFieldRefInput<$PrismaModel>
    in?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumlanguages_typeWithAggregatesFilter<$PrismaModel> | $Enums.languages_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlanguages_typeFilter<$PrismaModel>
    _max?: NestedEnumlanguages_typeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumregions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.regions_type | Enumregions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumregions_typeWithAggregatesFilter<$PrismaModel> | $Enums.regions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumregions_typeFilter<$PrismaModel>
    _max?: NestedEnumregions_typeFilter<$PrismaModel>
  }

  export type adminCountOrderByAggregateInput = {
    adminid?: SortOrder
    studentid?: SortOrder
    adminusername?: SortOrder
    adminpassword?: SortOrder
    createdAt?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    adminid?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    adminid?: SortOrder
    studentid?: SortOrder
    adminusername?: SortOrder
    adminpassword?: SortOrder
    createdAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    adminid?: SortOrder
    studentid?: SortOrder
    adminusername?: SortOrder
    adminpassword?: SortOrder
    createdAt?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    adminid?: SortOrder
  }

  export type Enumsponsorship_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sponsorship_type | Enumsponsorship_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsponsorship_typeFilter<$PrismaModel> | $Enums.sponsorship_type
  }

  export type Enumparticipation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.participation_type | Enumparticipation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumparticipation_typeFilter<$PrismaModel> | $Enums.participation_type
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Enumadvisor_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.advisor_type | Enumadvisor_typeFieldRefInput<$PrismaModel>
    in?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumadvisor_typeFilter<$PrismaModel> | $Enums.advisor_type
  }

  export type Enumrole_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.role_type | Enumrole_typeFieldRefInput<$PrismaModel>
    in?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrole_typeFilter<$PrismaModel> | $Enums.role_type
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type universityusersCountOrderByAggregateInput = {
    userid?: SortOrder
    departmentname?: SortOrder
    sponsorshiptype?: SortOrder
    participation?: SortOrder
    cafeteriaaccess?: SortOrder
    mealcard?: SortOrder
    batch?: SortOrder
    confessionfather?: SortOrder
    advisors?: SortOrder
    role?: SortOrder
    coursetaken?: SortOrder
    holidayincampus?: SortOrder
    tookcourse?: SortOrder
    ispriestordeacon?: SortOrder
  }

  export type universityusersAvgOrderByAggregateInput = {
    userid?: SortOrder
    batch?: SortOrder
  }

  export type universityusersMaxOrderByAggregateInput = {
    userid?: SortOrder
    departmentname?: SortOrder
    sponsorshiptype?: SortOrder
    participation?: SortOrder
    cafeteriaaccess?: SortOrder
    mealcard?: SortOrder
    batch?: SortOrder
    confessionfather?: SortOrder
    advisors?: SortOrder
    role?: SortOrder
    coursetaken?: SortOrder
    holidayincampus?: SortOrder
    tookcourse?: SortOrder
    ispriestordeacon?: SortOrder
  }

  export type universityusersMinOrderByAggregateInput = {
    userid?: SortOrder
    departmentname?: SortOrder
    sponsorshiptype?: SortOrder
    participation?: SortOrder
    cafeteriaaccess?: SortOrder
    mealcard?: SortOrder
    batch?: SortOrder
    confessionfather?: SortOrder
    advisors?: SortOrder
    role?: SortOrder
    coursetaken?: SortOrder
    holidayincampus?: SortOrder
    tookcourse?: SortOrder
    ispriestordeacon?: SortOrder
  }

  export type universityusersSumOrderByAggregateInput = {
    userid?: SortOrder
    batch?: SortOrder
  }

  export type Enumsponsorship_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sponsorship_type | Enumsponsorship_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsponsorship_typeWithAggregatesFilter<$PrismaModel> | $Enums.sponsorship_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsponsorship_typeFilter<$PrismaModel>
    _max?: NestedEnumsponsorship_typeFilter<$PrismaModel>
  }

  export type Enumparticipation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.participation_type | Enumparticipation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumparticipation_typeWithAggregatesFilter<$PrismaModel> | $Enums.participation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumparticipation_typeFilter<$PrismaModel>
    _max?: NestedEnumparticipation_typeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumadvisor_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.advisor_type | Enumadvisor_typeFieldRefInput<$PrismaModel>
    in?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumadvisor_typeWithAggregatesFilter<$PrismaModel> | $Enums.advisor_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadvisor_typeFilter<$PrismaModel>
    _max?: NestedEnumadvisor_typeFilter<$PrismaModel>
  }

  export type Enumrole_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_type | Enumrole_typeFieldRefInput<$PrismaModel>
    in?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrole_typeWithAggregatesFilter<$PrismaModel> | $Enums.role_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrole_typeFilter<$PrismaModel>
    _max?: NestedEnumrole_typeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type universityusersCreateNestedOneWithoutUserInput = {
    create?: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
    connectOrCreate?: universityusersCreateOrConnectWithoutUserInput
    connect?: universityusersWhereUniqueInput
  }

  export type universityusersUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
    connectOrCreate?: universityusersCreateOrConnectWithoutUserInput
    connect?: universityusersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumgender_typeFieldUpdateOperationsInput = {
    set?: $Enums.gender_type
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumdisability_typeFieldUpdateOperationsInput = {
    set?: $Enums.disability_type
  }

  export type Enumlanguages_typeFieldUpdateOperationsInput = {
    set?: $Enums.languages_type
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumregions_typeFieldUpdateOperationsInput = {
    set?: $Enums.regions_type
  }

  export type universityusersUpdateOneWithoutUserNestedInput = {
    create?: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
    connectOrCreate?: universityusersCreateOrConnectWithoutUserInput
    upsert?: universityusersUpsertWithoutUserInput
    disconnect?: universityusersWhereInput | boolean
    delete?: universityusersWhereInput | boolean
    connect?: universityusersWhereUniqueInput
    update?: XOR<XOR<universityusersUpdateToOneWithWhereWithoutUserInput, universityusersUpdateWithoutUserInput>, universityusersUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type universityusersUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
    connectOrCreate?: universityusersCreateOrConnectWithoutUserInput
    upsert?: universityusersUpsertWithoutUserInput
    disconnect?: universityusersWhereInput | boolean
    delete?: universityusersWhereInput | boolean
    connect?: universityusersWhereUniqueInput
    update?: XOR<XOR<universityusersUpdateToOneWithWhereWithoutUserInput, universityusersUpdateWithoutUserInput>, universityusersUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUniversityusersInput = {
    create?: XOR<UserCreateWithoutUniversityusersInput, UserUncheckedCreateWithoutUniversityusersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversityusersInput
    connect?: UserWhereUniqueInput
  }

  export type Enumsponsorship_typeFieldUpdateOperationsInput = {
    set?: $Enums.sponsorship_type
  }

  export type Enumparticipation_typeFieldUpdateOperationsInput = {
    set?: $Enums.participation_type
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Enumadvisor_typeFieldUpdateOperationsInput = {
    set?: $Enums.advisor_type
  }

  export type Enumrole_typeFieldUpdateOperationsInput = {
    set?: $Enums.role_type
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUniversityusersNestedInput = {
    create?: XOR<UserCreateWithoutUniversityusersInput, UserUncheckedCreateWithoutUniversityusersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversityusersInput
    upsert?: UserUpsertWithoutUniversityusersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUniversityusersInput, UserUpdateWithoutUniversityusersInput>, UserUncheckedUpdateWithoutUniversityusersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumgender_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeFilter<$PrismaModel> | $Enums.gender_type
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumdisability_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.disability_type | Enumdisability_typeFieldRefInput<$PrismaModel>
    in?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdisability_typeFilter<$PrismaModel> | $Enums.disability_type
  }

  export type NestedEnumlanguages_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.languages_type | Enumlanguages_typeFieldRefInput<$PrismaModel>
    in?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumlanguages_typeFilter<$PrismaModel> | $Enums.languages_type
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumregions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.regions_type | Enumregions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumregions_typeFilter<$PrismaModel> | $Enums.regions_type
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumgender_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeWithAggregatesFilter<$PrismaModel> | $Enums.gender_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_typeFilter<$PrismaModel>
    _max?: NestedEnumgender_typeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumdisability_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.disability_type | Enumdisability_typeFieldRefInput<$PrismaModel>
    in?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.disability_type[] | ListEnumdisability_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumdisability_typeWithAggregatesFilter<$PrismaModel> | $Enums.disability_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdisability_typeFilter<$PrismaModel>
    _max?: NestedEnumdisability_typeFilter<$PrismaModel>
  }

  export type NestedEnumlanguages_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.languages_type | Enumlanguages_typeFieldRefInput<$PrismaModel>
    in?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.languages_type[] | ListEnumlanguages_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumlanguages_typeWithAggregatesFilter<$PrismaModel> | $Enums.languages_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlanguages_typeFilter<$PrismaModel>
    _max?: NestedEnumlanguages_typeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumregions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.regions_type | Enumregions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.regions_type[] | ListEnumregions_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumregions_typeWithAggregatesFilter<$PrismaModel> | $Enums.regions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumregions_typeFilter<$PrismaModel>
    _max?: NestedEnumregions_typeFilter<$PrismaModel>
  }

  export type NestedEnumsponsorship_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sponsorship_type | Enumsponsorship_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsponsorship_typeFilter<$PrismaModel> | $Enums.sponsorship_type
  }

  export type NestedEnumparticipation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.participation_type | Enumparticipation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumparticipation_typeFilter<$PrismaModel> | $Enums.participation_type
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumadvisor_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.advisor_type | Enumadvisor_typeFieldRefInput<$PrismaModel>
    in?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumadvisor_typeFilter<$PrismaModel> | $Enums.advisor_type
  }

  export type NestedEnumrole_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.role_type | Enumrole_typeFieldRefInput<$PrismaModel>
    in?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrole_typeFilter<$PrismaModel> | $Enums.role_type
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumsponsorship_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sponsorship_type | Enumsponsorship_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.sponsorship_type[] | ListEnumsponsorship_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsponsorship_typeWithAggregatesFilter<$PrismaModel> | $Enums.sponsorship_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsponsorship_typeFilter<$PrismaModel>
    _max?: NestedEnumsponsorship_typeFilter<$PrismaModel>
  }

  export type NestedEnumparticipation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.participation_type | Enumparticipation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.participation_type[] | ListEnumparticipation_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumparticipation_typeWithAggregatesFilter<$PrismaModel> | $Enums.participation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumparticipation_typeFilter<$PrismaModel>
    _max?: NestedEnumparticipation_typeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumadvisor_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.advisor_type | Enumadvisor_typeFieldRefInput<$PrismaModel>
    in?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.advisor_type[] | ListEnumadvisor_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumadvisor_typeWithAggregatesFilter<$PrismaModel> | $Enums.advisor_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumadvisor_typeFilter<$PrismaModel>
    _max?: NestedEnumadvisor_typeFilter<$PrismaModel>
  }

  export type NestedEnumrole_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_type | Enumrole_typeFieldRefInput<$PrismaModel>
    in?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.role_type[] | ListEnumrole_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrole_typeWithAggregatesFilter<$PrismaModel> | $Enums.role_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrole_typeFilter<$PrismaModel>
    _max?: NestedEnumrole_typeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type universityusersCreateWithoutUserInput = {
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation?: $Enums.participation_type
    cafeteriaaccess?: boolean | null
    mealcard?: string | null
    batch: number
    confessionfather?: string | null
    advisors?: $Enums.advisor_type
    role?: $Enums.role_type
    coursetaken?: boolean
    holidayincampus?: boolean | null
    tookcourse?: boolean | null
    ispriestordeacon?: boolean | null
  }

  export type universityusersUncheckedCreateWithoutUserInput = {
    departmentname: string
    sponsorshiptype: $Enums.sponsorship_type
    participation?: $Enums.participation_type
    cafeteriaaccess?: boolean | null
    mealcard?: string | null
    batch: number
    confessionfather?: string | null
    advisors?: $Enums.advisor_type
    role?: $Enums.role_type
    coursetaken?: boolean
    holidayincampus?: boolean | null
    tookcourse?: boolean | null
    ispriestordeacon?: boolean | null
  }

  export type universityusersCreateOrConnectWithoutUserInput = {
    where: universityusersWhereUniqueInput
    create: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
  }

  export type universityusersUpsertWithoutUserInput = {
    update: XOR<universityusersUpdateWithoutUserInput, universityusersUncheckedUpdateWithoutUserInput>
    create: XOR<universityusersCreateWithoutUserInput, universityusersUncheckedCreateWithoutUserInput>
    where?: universityusersWhereInput
  }

  export type universityusersUpdateToOneWithWhereWithoutUserInput = {
    where?: universityusersWhereInput
    data: XOR<universityusersUpdateWithoutUserInput, universityusersUncheckedUpdateWithoutUserInput>
  }

  export type universityusersUpdateWithoutUserInput = {
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type universityusersUncheckedUpdateWithoutUserInput = {
    departmentname?: StringFieldUpdateOperationsInput | string
    sponsorshiptype?: Enumsponsorship_typeFieldUpdateOperationsInput | $Enums.sponsorship_type
    participation?: Enumparticipation_typeFieldUpdateOperationsInput | $Enums.participation_type
    cafeteriaaccess?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mealcard?: NullableStringFieldUpdateOperationsInput | string | null
    batch?: IntFieldUpdateOperationsInput | number
    confessionfather?: NullableStringFieldUpdateOperationsInput | string | null
    advisors?: Enumadvisor_typeFieldUpdateOperationsInput | $Enums.advisor_type
    role?: Enumrole_typeFieldUpdateOperationsInput | $Enums.role_type
    coursetaken?: BoolFieldUpdateOperationsInput | boolean
    holidayincampus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tookcourse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ispriestordeacon?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserCreateWithoutUniversityusersInput = {
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname?: string
    phone: string
    birthdate: Date | string
    useremail?: string | null
    nationality: string
    isphysicallydisabled?: $Enums.disability_type
    zonename?: string
    mothertongue?: $Enums.languages_type
    createdAt?: Date | string | null
    region?: $Enums.regions_type
    telegram_username?: string
  }

  export type UserUncheckedCreateWithoutUniversityusersInput = {
    userid?: number
    studentid: string
    firstname: string
    middlename: string
    lastname: string
    gender: $Enums.gender_type
    baptismalname?: string
    phone: string
    birthdate: Date | string
    useremail?: string | null
    nationality: string
    isphysicallydisabled?: $Enums.disability_type
    zonename?: string
    mothertongue?: $Enums.languages_type
    createdAt?: Date | string | null
    region?: $Enums.regions_type
    telegram_username?: string
  }

  export type UserCreateOrConnectWithoutUniversityusersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniversityusersInput, UserUncheckedCreateWithoutUniversityusersInput>
  }

  export type UserUpsertWithoutUniversityusersInput = {
    update: XOR<UserUpdateWithoutUniversityusersInput, UserUncheckedUpdateWithoutUniversityusersInput>
    create: XOR<UserCreateWithoutUniversityusersInput, UserUncheckedCreateWithoutUniversityusersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUniversityusersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUniversityusersInput, UserUncheckedUpdateWithoutUniversityusersInput>
  }

  export type UserUpdateWithoutUniversityusersInput = {
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutUniversityusersInput = {
    userid?: IntFieldUpdateOperationsInput | number
    studentid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    baptismalname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    useremail?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: StringFieldUpdateOperationsInput | string
    isphysicallydisabled?: Enumdisability_typeFieldUpdateOperationsInput | $Enums.disability_type
    zonename?: StringFieldUpdateOperationsInput | string
    mothertongue?: Enumlanguages_typeFieldUpdateOperationsInput | $Enums.languages_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region?: Enumregions_typeFieldUpdateOperationsInput | $Enums.regions_type
    telegram_username?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}