
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
 * Model Sem5
 * 
 */
export type Sem5 = $Result.DefaultSelection<Prisma.$Sem5Payload>
/**
 * Model Sem4
 * 
 */
export type Sem4 = $Result.DefaultSelection<Prisma.$Sem4Payload>
/**
 * Model batch_2024_25
 * 
 */
export type batch_2024_25 = $Result.DefaultSelection<Prisma.$batch_2024_25Payload>
/**
 * Model batch_2023_24
 * 
 */
export type batch_2023_24 = $Result.DefaultSelection<Prisma.$batch_2023_24Payload>
/**
 * Model Tjpatel_batch_2023_24
 * 
 */
export type Tjpatel_batch_2023_24 = $Result.DefaultSelection<Prisma.$Tjpatel_batch_2023_24Payload>
/**
 * Model charusat
 * 
 */
export type charusat = $Result.DefaultSelection<Prisma.$charusatPayload>

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
   * `prisma.sem5`: Exposes CRUD operations for the **Sem5** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sem5s
    * const sem5s = await prisma.sem5.findMany()
    * ```
    */
  get sem5(): Prisma.Sem5Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sem4`: Exposes CRUD operations for the **Sem4** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sem4s
    * const sem4s = await prisma.sem4.findMany()
    * ```
    */
  get sem4(): Prisma.Sem4Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch_2024_25`: Exposes CRUD operations for the **batch_2024_25** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batch_2024_25s
    * const batch_2024_25s = await prisma.batch_2024_25.findMany()
    * ```
    */
  get batch_2024_25(): Prisma.batch_2024_25Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch_2023_24`: Exposes CRUD operations for the **batch_2023_24** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batch_2023_24s
    * const batch_2023_24s = await prisma.batch_2023_24.findMany()
    * ```
    */
  get batch_2023_24(): Prisma.batch_2023_24Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tjpatel_batch_2023_24`: Exposes CRUD operations for the **Tjpatel_batch_2023_24** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tjpatel_batch_2023_24s
    * const tjpatel_batch_2023_24s = await prisma.tjpatel_batch_2023_24.findMany()
    * ```
    */
  get tjpatel_batch_2023_24(): Prisma.Tjpatel_batch_2023_24Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charusat`: Exposes CRUD operations for the **charusat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charusats
    * const charusats = await prisma.charusat.findMany()
    * ```
    */
  get charusat(): Prisma.charusatDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Sem5: 'Sem5',
    Sem4: 'Sem4',
    batch_2024_25: 'batch_2024_25',
    batch_2023_24: 'batch_2023_24',
    Tjpatel_batch_2023_24: 'Tjpatel_batch_2023_24',
    charusat: 'charusat'
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
      modelProps: "user" | "sem5" | "sem4" | "batch_2024_25" | "batch_2023_24" | "tjpatel_batch_2023_24" | "charusat"
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
      Sem5: {
        payload: Prisma.$Sem5Payload<ExtArgs>
        fields: Prisma.Sem5FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sem5FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sem5FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          findFirst: {
            args: Prisma.Sem5FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sem5FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          findMany: {
            args: Prisma.Sem5FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>[]
          }
          create: {
            args: Prisma.Sem5CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          createMany: {
            args: Prisma.Sem5CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sem5CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>[]
          }
          delete: {
            args: Prisma.Sem5DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          update: {
            args: Prisma.Sem5UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          deleteMany: {
            args: Prisma.Sem5DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sem5UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sem5UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>[]
          }
          upsert: {
            args: Prisma.Sem5UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem5Payload>
          }
          aggregate: {
            args: Prisma.Sem5AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSem5>
          }
          groupBy: {
            args: Prisma.Sem5GroupByArgs<ExtArgs>
            result: $Utils.Optional<Sem5GroupByOutputType>[]
          }
          count: {
            args: Prisma.Sem5CountArgs<ExtArgs>
            result: $Utils.Optional<Sem5CountAggregateOutputType> | number
          }
        }
      }
      Sem4: {
        payload: Prisma.$Sem4Payload<ExtArgs>
        fields: Prisma.Sem4FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sem4FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sem4FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          findFirst: {
            args: Prisma.Sem4FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sem4FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          findMany: {
            args: Prisma.Sem4FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>[]
          }
          create: {
            args: Prisma.Sem4CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          createMany: {
            args: Prisma.Sem4CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sem4CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>[]
          }
          delete: {
            args: Prisma.Sem4DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          update: {
            args: Prisma.Sem4UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          deleteMany: {
            args: Prisma.Sem4DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sem4UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sem4UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>[]
          }
          upsert: {
            args: Prisma.Sem4UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sem4Payload>
          }
          aggregate: {
            args: Prisma.Sem4AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSem4>
          }
          groupBy: {
            args: Prisma.Sem4GroupByArgs<ExtArgs>
            result: $Utils.Optional<Sem4GroupByOutputType>[]
          }
          count: {
            args: Prisma.Sem4CountArgs<ExtArgs>
            result: $Utils.Optional<Sem4CountAggregateOutputType> | number
          }
        }
      }
      batch_2024_25: {
        payload: Prisma.$batch_2024_25Payload<ExtArgs>
        fields: Prisma.batch_2024_25FieldRefs
        operations: {
          findUnique: {
            args: Prisma.batch_2024_25FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.batch_2024_25FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          findFirst: {
            args: Prisma.batch_2024_25FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.batch_2024_25FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          findMany: {
            args: Prisma.batch_2024_25FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>[]
          }
          create: {
            args: Prisma.batch_2024_25CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          createMany: {
            args: Prisma.batch_2024_25CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.batch_2024_25CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>[]
          }
          delete: {
            args: Prisma.batch_2024_25DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          update: {
            args: Prisma.batch_2024_25UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          deleteMany: {
            args: Prisma.batch_2024_25DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.batch_2024_25UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.batch_2024_25UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>[]
          }
          upsert: {
            args: Prisma.batch_2024_25UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2024_25Payload>
          }
          aggregate: {
            args: Prisma.Batch_2024_25AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch_2024_25>
          }
          groupBy: {
            args: Prisma.batch_2024_25GroupByArgs<ExtArgs>
            result: $Utils.Optional<Batch_2024_25GroupByOutputType>[]
          }
          count: {
            args: Prisma.batch_2024_25CountArgs<ExtArgs>
            result: $Utils.Optional<Batch_2024_25CountAggregateOutputType> | number
          }
        }
      }
      batch_2023_24: {
        payload: Prisma.$batch_2023_24Payload<ExtArgs>
        fields: Prisma.batch_2023_24FieldRefs
        operations: {
          findUnique: {
            args: Prisma.batch_2023_24FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.batch_2023_24FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          findFirst: {
            args: Prisma.batch_2023_24FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.batch_2023_24FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          findMany: {
            args: Prisma.batch_2023_24FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>[]
          }
          create: {
            args: Prisma.batch_2023_24CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          createMany: {
            args: Prisma.batch_2023_24CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.batch_2023_24CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>[]
          }
          delete: {
            args: Prisma.batch_2023_24DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          update: {
            args: Prisma.batch_2023_24UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          deleteMany: {
            args: Prisma.batch_2023_24DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.batch_2023_24UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.batch_2023_24UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>[]
          }
          upsert: {
            args: Prisma.batch_2023_24UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batch_2023_24Payload>
          }
          aggregate: {
            args: Prisma.Batch_2023_24AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch_2023_24>
          }
          groupBy: {
            args: Prisma.batch_2023_24GroupByArgs<ExtArgs>
            result: $Utils.Optional<Batch_2023_24GroupByOutputType>[]
          }
          count: {
            args: Prisma.batch_2023_24CountArgs<ExtArgs>
            result: $Utils.Optional<Batch_2023_24CountAggregateOutputType> | number
          }
        }
      }
      Tjpatel_batch_2023_24: {
        payload: Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>
        fields: Prisma.Tjpatel_batch_2023_24FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tjpatel_batch_2023_24FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tjpatel_batch_2023_24FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          findFirst: {
            args: Prisma.Tjpatel_batch_2023_24FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tjpatel_batch_2023_24FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          findMany: {
            args: Prisma.Tjpatel_batch_2023_24FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>[]
          }
          create: {
            args: Prisma.Tjpatel_batch_2023_24CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          createMany: {
            args: Prisma.Tjpatel_batch_2023_24CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tjpatel_batch_2023_24CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>[]
          }
          delete: {
            args: Prisma.Tjpatel_batch_2023_24DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          update: {
            args: Prisma.Tjpatel_batch_2023_24UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          deleteMany: {
            args: Prisma.Tjpatel_batch_2023_24DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tjpatel_batch_2023_24UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tjpatel_batch_2023_24UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>[]
          }
          upsert: {
            args: Prisma.Tjpatel_batch_2023_24UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tjpatel_batch_2023_24Payload>
          }
          aggregate: {
            args: Prisma.Tjpatel_batch_2023_24AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTjpatel_batch_2023_24>
          }
          groupBy: {
            args: Prisma.Tjpatel_batch_2023_24GroupByArgs<ExtArgs>
            result: $Utils.Optional<Tjpatel_batch_2023_24GroupByOutputType>[]
          }
          count: {
            args: Prisma.Tjpatel_batch_2023_24CountArgs<ExtArgs>
            result: $Utils.Optional<Tjpatel_batch_2023_24CountAggregateOutputType> | number
          }
        }
      }
      charusat: {
        payload: Prisma.$charusatPayload<ExtArgs>
        fields: Prisma.charusatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.charusatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.charusatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          findFirst: {
            args: Prisma.charusatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.charusatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          findMany: {
            args: Prisma.charusatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>[]
          }
          create: {
            args: Prisma.charusatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          createMany: {
            args: Prisma.charusatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.charusatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>[]
          }
          delete: {
            args: Prisma.charusatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          update: {
            args: Prisma.charusatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          deleteMany: {
            args: Prisma.charusatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.charusatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.charusatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>[]
          }
          upsert: {
            args: Prisma.charusatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$charusatPayload>
          }
          aggregate: {
            args: Prisma.CharusatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharusat>
          }
          groupBy: {
            args: Prisma.charusatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharusatGroupByOutputType>[]
          }
          count: {
            args: Prisma.charusatCountArgs<ExtArgs>
            result: $Utils.Optional<CharusatCountAggregateOutputType> | number
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
    sem5?: Sem5Omit
    sem4?: Sem4Omit
    batch_2024_25?: batch_2024_25Omit
    batch_2023_24?: batch_2023_24Omit
    tjpatel_batch_2023_24?: Tjpatel_batch_2023_24Omit
    charusat?: charusatOmit
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
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }


  /**
   * Model Sem5
   */

  export type AggregateSem5 = {
    _count: Sem5CountAggregateOutputType | null
    _avg: Sem5AvgAggregateOutputType | null
    _sum: Sem5SumAggregateOutputType | null
    _min: Sem5MinAggregateOutputType | null
    _max: Sem5MaxAggregateOutputType | null
  }

  export type Sem5AvgAggregateOutputType = {
    RollNo: number | null
  }

  export type Sem5SumAggregateOutputType = {
    RollNo: number | null
  }

  export type Sem5MinAggregateOutputType = {
    id: string | null
    RollNo: number | null
    EnrollmentNo: string | null
    StudentName: string | null
    LabBatchNo: string | null
    sem: string | null
    AdmissionApplicationNo: string | null
    Altmail: string | null
    FNum: string | null
    Gender: string | null
    MNum: string | null
    PhNum1: string | null
    PhNum2: string | null
    mail: string | null
    aadhaar_number: string | null
    abc_id: string | null
    dob: string | null
    mobile_number_registered_with_aadhar: string | null
  }

  export type Sem5MaxAggregateOutputType = {
    id: string | null
    RollNo: number | null
    EnrollmentNo: string | null
    StudentName: string | null
    LabBatchNo: string | null
    sem: string | null
    AdmissionApplicationNo: string | null
    Altmail: string | null
    FNum: string | null
    Gender: string | null
    MNum: string | null
    PhNum1: string | null
    PhNum2: string | null
    mail: string | null
    aadhaar_number: string | null
    abc_id: string | null
    dob: string | null
    mobile_number_registered_with_aadhar: string | null
  }

  export type Sem5CountAggregateOutputType = {
    id: number
    RollNo: number
    EnrollmentNo: number
    StudentName: number
    LabBatchNo: number
    sem: number
    AdmissionApplicationNo: number
    Altmail: number
    FNum: number
    Gender: number
    MNum: number
    PhNum1: number
    PhNum2: number
    mail: number
    aadhaar_number: number
    abc_id: number
    dob: number
    mobile_number_registered_with_aadhar: number
    _all: number
  }


  export type Sem5AvgAggregateInputType = {
    RollNo?: true
  }

  export type Sem5SumAggregateInputType = {
    RollNo?: true
  }

  export type Sem5MinAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
    sem?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    mail?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mobile_number_registered_with_aadhar?: true
  }

  export type Sem5MaxAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
    sem?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    mail?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mobile_number_registered_with_aadhar?: true
  }

  export type Sem5CountAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
    sem?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    mail?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mobile_number_registered_with_aadhar?: true
    _all?: true
  }

  export type Sem5AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sem5 to aggregate.
     */
    where?: Sem5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem5s to fetch.
     */
    orderBy?: Sem5OrderByWithRelationInput | Sem5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sem5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sem5s
    **/
    _count?: true | Sem5CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sem5AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sem5SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sem5MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sem5MaxAggregateInputType
  }

  export type GetSem5AggregateType<T extends Sem5AggregateArgs> = {
        [P in keyof T & keyof AggregateSem5]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSem5[P]>
      : GetScalarType<T[P], AggregateSem5[P]>
  }




  export type Sem5GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sem5WhereInput
    orderBy?: Sem5OrderByWithAggregationInput | Sem5OrderByWithAggregationInput[]
    by: Sem5ScalarFieldEnum[] | Sem5ScalarFieldEnum
    having?: Sem5ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sem5CountAggregateInputType | true
    _avg?: Sem5AvgAggregateInputType
    _sum?: Sem5SumAggregateInputType
    _min?: Sem5MinAggregateInputType
    _max?: Sem5MaxAggregateInputType
  }

  export type Sem5GroupByOutputType = {
    id: string
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
    sem: string
    AdmissionApplicationNo: string
    Altmail: string
    FNum: string
    Gender: string
    MNum: string
    PhNum1: string
    PhNum2: string
    mail: string
    aadhaar_number: string
    abc_id: string
    dob: string
    mobile_number_registered_with_aadhar: string
    _count: Sem5CountAggregateOutputType | null
    _avg: Sem5AvgAggregateOutputType | null
    _sum: Sem5SumAggregateOutputType | null
    _min: Sem5MinAggregateOutputType | null
    _max: Sem5MaxAggregateOutputType | null
  }

  type GetSem5GroupByPayload<T extends Sem5GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sem5GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sem5GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sem5GroupByOutputType[P]>
            : GetScalarType<T[P], Sem5GroupByOutputType[P]>
        }
      >
    >


  export type Sem5Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
    sem?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    mail?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mobile_number_registered_with_aadhar?: boolean
  }, ExtArgs["result"]["sem5"]>

  export type Sem5SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
    sem?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    mail?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mobile_number_registered_with_aadhar?: boolean
  }, ExtArgs["result"]["sem5"]>

  export type Sem5SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
    sem?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    mail?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mobile_number_registered_with_aadhar?: boolean
  }, ExtArgs["result"]["sem5"]>

  export type Sem5SelectScalar = {
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
    sem?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    mail?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mobile_number_registered_with_aadhar?: boolean
  }

  export type Sem5Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "RollNo" | "EnrollmentNo" | "StudentName" | "LabBatchNo" | "sem" | "AdmissionApplicationNo" | "Altmail" | "FNum" | "Gender" | "MNum" | "PhNum1" | "PhNum2" | "mail" | "aadhaar_number" | "abc_id" | "dob" | "mobile_number_registered_with_aadhar", ExtArgs["result"]["sem5"]>

  export type $Sem5Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sem5"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      RollNo: number
      EnrollmentNo: string
      StudentName: string
      LabBatchNo: string
      sem: string
      AdmissionApplicationNo: string
      Altmail: string
      FNum: string
      Gender: string
      MNum: string
      PhNum1: string
      PhNum2: string
      mail: string
      aadhaar_number: string
      abc_id: string
      dob: string
      mobile_number_registered_with_aadhar: string
    }, ExtArgs["result"]["sem5"]>
    composites: {}
  }

  type Sem5GetPayload<S extends boolean | null | undefined | Sem5DefaultArgs> = $Result.GetResult<Prisma.$Sem5Payload, S>

  type Sem5CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sem5FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sem5CountAggregateInputType | true
    }

  export interface Sem5Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sem5'], meta: { name: 'Sem5' } }
    /**
     * Find zero or one Sem5 that matches the filter.
     * @param {Sem5FindUniqueArgs} args - Arguments to find a Sem5
     * @example
     * // Get one Sem5
     * const sem5 = await prisma.sem5.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sem5FindUniqueArgs>(args: SelectSubset<T, Sem5FindUniqueArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sem5 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sem5FindUniqueOrThrowArgs} args - Arguments to find a Sem5
     * @example
     * // Get one Sem5
     * const sem5 = await prisma.sem5.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sem5FindUniqueOrThrowArgs>(args: SelectSubset<T, Sem5FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sem5 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5FindFirstArgs} args - Arguments to find a Sem5
     * @example
     * // Get one Sem5
     * const sem5 = await prisma.sem5.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sem5FindFirstArgs>(args?: SelectSubset<T, Sem5FindFirstArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sem5 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5FindFirstOrThrowArgs} args - Arguments to find a Sem5
     * @example
     * // Get one Sem5
     * const sem5 = await prisma.sem5.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sem5FindFirstOrThrowArgs>(args?: SelectSubset<T, Sem5FindFirstOrThrowArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sem5s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sem5s
     * const sem5s = await prisma.sem5.findMany()
     * 
     * // Get first 10 Sem5s
     * const sem5s = await prisma.sem5.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sem5WithIdOnly = await prisma.sem5.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sem5FindManyArgs>(args?: SelectSubset<T, Sem5FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sem5.
     * @param {Sem5CreateArgs} args - Arguments to create a Sem5.
     * @example
     * // Create one Sem5
     * const Sem5 = await prisma.sem5.create({
     *   data: {
     *     // ... data to create a Sem5
     *   }
     * })
     * 
     */
    create<T extends Sem5CreateArgs>(args: SelectSubset<T, Sem5CreateArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sem5s.
     * @param {Sem5CreateManyArgs} args - Arguments to create many Sem5s.
     * @example
     * // Create many Sem5s
     * const sem5 = await prisma.sem5.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sem5CreateManyArgs>(args?: SelectSubset<T, Sem5CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sem5s and returns the data saved in the database.
     * @param {Sem5CreateManyAndReturnArgs} args - Arguments to create many Sem5s.
     * @example
     * // Create many Sem5s
     * const sem5 = await prisma.sem5.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sem5s and only return the `id`
     * const sem5WithIdOnly = await prisma.sem5.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sem5CreateManyAndReturnArgs>(args?: SelectSubset<T, Sem5CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sem5.
     * @param {Sem5DeleteArgs} args - Arguments to delete one Sem5.
     * @example
     * // Delete one Sem5
     * const Sem5 = await prisma.sem5.delete({
     *   where: {
     *     // ... filter to delete one Sem5
     *   }
     * })
     * 
     */
    delete<T extends Sem5DeleteArgs>(args: SelectSubset<T, Sem5DeleteArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sem5.
     * @param {Sem5UpdateArgs} args - Arguments to update one Sem5.
     * @example
     * // Update one Sem5
     * const sem5 = await prisma.sem5.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sem5UpdateArgs>(args: SelectSubset<T, Sem5UpdateArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sem5s.
     * @param {Sem5DeleteManyArgs} args - Arguments to filter Sem5s to delete.
     * @example
     * // Delete a few Sem5s
     * const { count } = await prisma.sem5.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sem5DeleteManyArgs>(args?: SelectSubset<T, Sem5DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sem5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sem5s
     * const sem5 = await prisma.sem5.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sem5UpdateManyArgs>(args: SelectSubset<T, Sem5UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sem5s and returns the data updated in the database.
     * @param {Sem5UpdateManyAndReturnArgs} args - Arguments to update many Sem5s.
     * @example
     * // Update many Sem5s
     * const sem5 = await prisma.sem5.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sem5s and only return the `id`
     * const sem5WithIdOnly = await prisma.sem5.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Sem5UpdateManyAndReturnArgs>(args: SelectSubset<T, Sem5UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sem5.
     * @param {Sem5UpsertArgs} args - Arguments to update or create a Sem5.
     * @example
     * // Update or create a Sem5
     * const sem5 = await prisma.sem5.upsert({
     *   create: {
     *     // ... data to create a Sem5
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sem5 we want to update
     *   }
     * })
     */
    upsert<T extends Sem5UpsertArgs>(args: SelectSubset<T, Sem5UpsertArgs<ExtArgs>>): Prisma__Sem5Client<$Result.GetResult<Prisma.$Sem5Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sem5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5CountArgs} args - Arguments to filter Sem5s to count.
     * @example
     * // Count the number of Sem5s
     * const count = await prisma.sem5.count({
     *   where: {
     *     // ... the filter for the Sem5s we want to count
     *   }
     * })
    **/
    count<T extends Sem5CountArgs>(
      args?: Subset<T, Sem5CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sem5CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sem5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sem5AggregateArgs>(args: Subset<T, Sem5AggregateArgs>): Prisma.PrismaPromise<GetSem5AggregateType<T>>

    /**
     * Group by Sem5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem5GroupByArgs} args - Group by arguments.
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
      T extends Sem5GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sem5GroupByArgs['orderBy'] }
        : { orderBy?: Sem5GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Sem5GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSem5GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sem5 model
   */
  readonly fields: Sem5FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sem5.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sem5Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sem5 model
   */
  interface Sem5FieldRefs {
    readonly id: FieldRef<"Sem5", 'String'>
    readonly RollNo: FieldRef<"Sem5", 'Int'>
    readonly EnrollmentNo: FieldRef<"Sem5", 'String'>
    readonly StudentName: FieldRef<"Sem5", 'String'>
    readonly LabBatchNo: FieldRef<"Sem5", 'String'>
    readonly sem: FieldRef<"Sem5", 'String'>
    readonly AdmissionApplicationNo: FieldRef<"Sem5", 'String'>
    readonly Altmail: FieldRef<"Sem5", 'String'>
    readonly FNum: FieldRef<"Sem5", 'String'>
    readonly Gender: FieldRef<"Sem5", 'String'>
    readonly MNum: FieldRef<"Sem5", 'String'>
    readonly PhNum1: FieldRef<"Sem5", 'String'>
    readonly PhNum2: FieldRef<"Sem5", 'String'>
    readonly mail: FieldRef<"Sem5", 'String'>
    readonly aadhaar_number: FieldRef<"Sem5", 'String'>
    readonly abc_id: FieldRef<"Sem5", 'String'>
    readonly dob: FieldRef<"Sem5", 'String'>
    readonly mobile_number_registered_with_aadhar: FieldRef<"Sem5", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sem5 findUnique
   */
  export type Sem5FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter, which Sem5 to fetch.
     */
    where: Sem5WhereUniqueInput
  }

  /**
   * Sem5 findUniqueOrThrow
   */
  export type Sem5FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter, which Sem5 to fetch.
     */
    where: Sem5WhereUniqueInput
  }

  /**
   * Sem5 findFirst
   */
  export type Sem5FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter, which Sem5 to fetch.
     */
    where?: Sem5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem5s to fetch.
     */
    orderBy?: Sem5OrderByWithRelationInput | Sem5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sem5s.
     */
    cursor?: Sem5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sem5s.
     */
    distinct?: Sem5ScalarFieldEnum | Sem5ScalarFieldEnum[]
  }

  /**
   * Sem5 findFirstOrThrow
   */
  export type Sem5FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter, which Sem5 to fetch.
     */
    where?: Sem5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem5s to fetch.
     */
    orderBy?: Sem5OrderByWithRelationInput | Sem5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sem5s.
     */
    cursor?: Sem5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sem5s.
     */
    distinct?: Sem5ScalarFieldEnum | Sem5ScalarFieldEnum[]
  }

  /**
   * Sem5 findMany
   */
  export type Sem5FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter, which Sem5s to fetch.
     */
    where?: Sem5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem5s to fetch.
     */
    orderBy?: Sem5OrderByWithRelationInput | Sem5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sem5s.
     */
    cursor?: Sem5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem5s.
     */
    skip?: number
    distinct?: Sem5ScalarFieldEnum | Sem5ScalarFieldEnum[]
  }

  /**
   * Sem5 create
   */
  export type Sem5CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * The data needed to create a Sem5.
     */
    data: XOR<Sem5CreateInput, Sem5UncheckedCreateInput>
  }

  /**
   * Sem5 createMany
   */
  export type Sem5CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sem5s.
     */
    data: Sem5CreateManyInput | Sem5CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sem5 createManyAndReturn
   */
  export type Sem5CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * The data used to create many Sem5s.
     */
    data: Sem5CreateManyInput | Sem5CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sem5 update
   */
  export type Sem5UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * The data needed to update a Sem5.
     */
    data: XOR<Sem5UpdateInput, Sem5UncheckedUpdateInput>
    /**
     * Choose, which Sem5 to update.
     */
    where: Sem5WhereUniqueInput
  }

  /**
   * Sem5 updateMany
   */
  export type Sem5UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sem5s.
     */
    data: XOR<Sem5UpdateManyMutationInput, Sem5UncheckedUpdateManyInput>
    /**
     * Filter which Sem5s to update
     */
    where?: Sem5WhereInput
    /**
     * Limit how many Sem5s to update.
     */
    limit?: number
  }

  /**
   * Sem5 updateManyAndReturn
   */
  export type Sem5UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * The data used to update Sem5s.
     */
    data: XOR<Sem5UpdateManyMutationInput, Sem5UncheckedUpdateManyInput>
    /**
     * Filter which Sem5s to update
     */
    where?: Sem5WhereInput
    /**
     * Limit how many Sem5s to update.
     */
    limit?: number
  }

  /**
   * Sem5 upsert
   */
  export type Sem5UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * The filter to search for the Sem5 to update in case it exists.
     */
    where: Sem5WhereUniqueInput
    /**
     * In case the Sem5 found by the `where` argument doesn't exist, create a new Sem5 with this data.
     */
    create: XOR<Sem5CreateInput, Sem5UncheckedCreateInput>
    /**
     * In case the Sem5 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sem5UpdateInput, Sem5UncheckedUpdateInput>
  }

  /**
   * Sem5 delete
   */
  export type Sem5DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
    /**
     * Filter which Sem5 to delete.
     */
    where: Sem5WhereUniqueInput
  }

  /**
   * Sem5 deleteMany
   */
  export type Sem5DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sem5s to delete
     */
    where?: Sem5WhereInput
    /**
     * Limit how many Sem5s to delete.
     */
    limit?: number
  }

  /**
   * Sem5 without action
   */
  export type Sem5DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem5
     */
    select?: Sem5Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem5
     */
    omit?: Sem5Omit<ExtArgs> | null
  }


  /**
   * Model Sem4
   */

  export type AggregateSem4 = {
    _count: Sem4CountAggregateOutputType | null
    _avg: Sem4AvgAggregateOutputType | null
    _sum: Sem4SumAggregateOutputType | null
    _min: Sem4MinAggregateOutputType | null
    _max: Sem4MaxAggregateOutputType | null
  }

  export type Sem4AvgAggregateOutputType = {
    id: number | null
    RollNo: number | null
  }

  export type Sem4SumAggregateOutputType = {
    id: number | null
    RollNo: number | null
  }

  export type Sem4MinAggregateOutputType = {
    id: number | null
    RollNo: number | null
    EnrollmentNo: string | null
    StudentName: string | null
    LabBatchNo: string | null
  }

  export type Sem4MaxAggregateOutputType = {
    id: number | null
    RollNo: number | null
    EnrollmentNo: string | null
    StudentName: string | null
    LabBatchNo: string | null
  }

  export type Sem4CountAggregateOutputType = {
    id: number
    RollNo: number
    EnrollmentNo: number
    StudentName: number
    LabBatchNo: number
    _all: number
  }


  export type Sem4AvgAggregateInputType = {
    id?: true
    RollNo?: true
  }

  export type Sem4SumAggregateInputType = {
    id?: true
    RollNo?: true
  }

  export type Sem4MinAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
  }

  export type Sem4MaxAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
  }

  export type Sem4CountAggregateInputType = {
    id?: true
    RollNo?: true
    EnrollmentNo?: true
    StudentName?: true
    LabBatchNo?: true
    _all?: true
  }

  export type Sem4AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sem4 to aggregate.
     */
    where?: Sem4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem4s to fetch.
     */
    orderBy?: Sem4OrderByWithRelationInput | Sem4OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sem4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem4s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem4s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sem4s
    **/
    _count?: true | Sem4CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sem4AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sem4SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sem4MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sem4MaxAggregateInputType
  }

  export type GetSem4AggregateType<T extends Sem4AggregateArgs> = {
        [P in keyof T & keyof AggregateSem4]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSem4[P]>
      : GetScalarType<T[P], AggregateSem4[P]>
  }




  export type Sem4GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sem4WhereInput
    orderBy?: Sem4OrderByWithAggregationInput | Sem4OrderByWithAggregationInput[]
    by: Sem4ScalarFieldEnum[] | Sem4ScalarFieldEnum
    having?: Sem4ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sem4CountAggregateInputType | true
    _avg?: Sem4AvgAggregateInputType
    _sum?: Sem4SumAggregateInputType
    _min?: Sem4MinAggregateInputType
    _max?: Sem4MaxAggregateInputType
  }

  export type Sem4GroupByOutputType = {
    id: number
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
    _count: Sem4CountAggregateOutputType | null
    _avg: Sem4AvgAggregateOutputType | null
    _sum: Sem4SumAggregateOutputType | null
    _min: Sem4MinAggregateOutputType | null
    _max: Sem4MaxAggregateOutputType | null
  }

  type GetSem4GroupByPayload<T extends Sem4GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sem4GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sem4GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sem4GroupByOutputType[P]>
            : GetScalarType<T[P], Sem4GroupByOutputType[P]>
        }
      >
    >


  export type Sem4Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
  }, ExtArgs["result"]["sem4"]>

  export type Sem4SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
  }, ExtArgs["result"]["sem4"]>

  export type Sem4SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
  }, ExtArgs["result"]["sem4"]>

  export type Sem4SelectScalar = {
    id?: boolean
    RollNo?: boolean
    EnrollmentNo?: boolean
    StudentName?: boolean
    LabBatchNo?: boolean
  }

  export type Sem4Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "RollNo" | "EnrollmentNo" | "StudentName" | "LabBatchNo", ExtArgs["result"]["sem4"]>

  export type $Sem4Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sem4"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      RollNo: number
      EnrollmentNo: string
      StudentName: string
      LabBatchNo: string
    }, ExtArgs["result"]["sem4"]>
    composites: {}
  }

  type Sem4GetPayload<S extends boolean | null | undefined | Sem4DefaultArgs> = $Result.GetResult<Prisma.$Sem4Payload, S>

  type Sem4CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sem4FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sem4CountAggregateInputType | true
    }

  export interface Sem4Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sem4'], meta: { name: 'Sem4' } }
    /**
     * Find zero or one Sem4 that matches the filter.
     * @param {Sem4FindUniqueArgs} args - Arguments to find a Sem4
     * @example
     * // Get one Sem4
     * const sem4 = await prisma.sem4.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sem4FindUniqueArgs>(args: SelectSubset<T, Sem4FindUniqueArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sem4 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sem4FindUniqueOrThrowArgs} args - Arguments to find a Sem4
     * @example
     * // Get one Sem4
     * const sem4 = await prisma.sem4.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sem4FindUniqueOrThrowArgs>(args: SelectSubset<T, Sem4FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sem4 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4FindFirstArgs} args - Arguments to find a Sem4
     * @example
     * // Get one Sem4
     * const sem4 = await prisma.sem4.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sem4FindFirstArgs>(args?: SelectSubset<T, Sem4FindFirstArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sem4 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4FindFirstOrThrowArgs} args - Arguments to find a Sem4
     * @example
     * // Get one Sem4
     * const sem4 = await prisma.sem4.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sem4FindFirstOrThrowArgs>(args?: SelectSubset<T, Sem4FindFirstOrThrowArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sem4s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sem4s
     * const sem4s = await prisma.sem4.findMany()
     * 
     * // Get first 10 Sem4s
     * const sem4s = await prisma.sem4.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sem4WithIdOnly = await prisma.sem4.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sem4FindManyArgs>(args?: SelectSubset<T, Sem4FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sem4.
     * @param {Sem4CreateArgs} args - Arguments to create a Sem4.
     * @example
     * // Create one Sem4
     * const Sem4 = await prisma.sem4.create({
     *   data: {
     *     // ... data to create a Sem4
     *   }
     * })
     * 
     */
    create<T extends Sem4CreateArgs>(args: SelectSubset<T, Sem4CreateArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sem4s.
     * @param {Sem4CreateManyArgs} args - Arguments to create many Sem4s.
     * @example
     * // Create many Sem4s
     * const sem4 = await prisma.sem4.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sem4CreateManyArgs>(args?: SelectSubset<T, Sem4CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sem4s and returns the data saved in the database.
     * @param {Sem4CreateManyAndReturnArgs} args - Arguments to create many Sem4s.
     * @example
     * // Create many Sem4s
     * const sem4 = await prisma.sem4.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sem4s and only return the `id`
     * const sem4WithIdOnly = await prisma.sem4.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sem4CreateManyAndReturnArgs>(args?: SelectSubset<T, Sem4CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sem4.
     * @param {Sem4DeleteArgs} args - Arguments to delete one Sem4.
     * @example
     * // Delete one Sem4
     * const Sem4 = await prisma.sem4.delete({
     *   where: {
     *     // ... filter to delete one Sem4
     *   }
     * })
     * 
     */
    delete<T extends Sem4DeleteArgs>(args: SelectSubset<T, Sem4DeleteArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sem4.
     * @param {Sem4UpdateArgs} args - Arguments to update one Sem4.
     * @example
     * // Update one Sem4
     * const sem4 = await prisma.sem4.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sem4UpdateArgs>(args: SelectSubset<T, Sem4UpdateArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sem4s.
     * @param {Sem4DeleteManyArgs} args - Arguments to filter Sem4s to delete.
     * @example
     * // Delete a few Sem4s
     * const { count } = await prisma.sem4.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sem4DeleteManyArgs>(args?: SelectSubset<T, Sem4DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sem4s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sem4s
     * const sem4 = await prisma.sem4.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sem4UpdateManyArgs>(args: SelectSubset<T, Sem4UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sem4s and returns the data updated in the database.
     * @param {Sem4UpdateManyAndReturnArgs} args - Arguments to update many Sem4s.
     * @example
     * // Update many Sem4s
     * const sem4 = await prisma.sem4.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sem4s and only return the `id`
     * const sem4WithIdOnly = await prisma.sem4.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Sem4UpdateManyAndReturnArgs>(args: SelectSubset<T, Sem4UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sem4.
     * @param {Sem4UpsertArgs} args - Arguments to update or create a Sem4.
     * @example
     * // Update or create a Sem4
     * const sem4 = await prisma.sem4.upsert({
     *   create: {
     *     // ... data to create a Sem4
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sem4 we want to update
     *   }
     * })
     */
    upsert<T extends Sem4UpsertArgs>(args: SelectSubset<T, Sem4UpsertArgs<ExtArgs>>): Prisma__Sem4Client<$Result.GetResult<Prisma.$Sem4Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sem4s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4CountArgs} args - Arguments to filter Sem4s to count.
     * @example
     * // Count the number of Sem4s
     * const count = await prisma.sem4.count({
     *   where: {
     *     // ... the filter for the Sem4s we want to count
     *   }
     * })
    **/
    count<T extends Sem4CountArgs>(
      args?: Subset<T, Sem4CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sem4CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sem4.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sem4AggregateArgs>(args: Subset<T, Sem4AggregateArgs>): Prisma.PrismaPromise<GetSem4AggregateType<T>>

    /**
     * Group by Sem4.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sem4GroupByArgs} args - Group by arguments.
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
      T extends Sem4GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sem4GroupByArgs['orderBy'] }
        : { orderBy?: Sem4GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Sem4GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSem4GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sem4 model
   */
  readonly fields: Sem4FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sem4.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sem4Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sem4 model
   */
  interface Sem4FieldRefs {
    readonly id: FieldRef<"Sem4", 'Int'>
    readonly RollNo: FieldRef<"Sem4", 'Int'>
    readonly EnrollmentNo: FieldRef<"Sem4", 'String'>
    readonly StudentName: FieldRef<"Sem4", 'String'>
    readonly LabBatchNo: FieldRef<"Sem4", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sem4 findUnique
   */
  export type Sem4FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter, which Sem4 to fetch.
     */
    where: Sem4WhereUniqueInput
  }

  /**
   * Sem4 findUniqueOrThrow
   */
  export type Sem4FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter, which Sem4 to fetch.
     */
    where: Sem4WhereUniqueInput
  }

  /**
   * Sem4 findFirst
   */
  export type Sem4FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter, which Sem4 to fetch.
     */
    where?: Sem4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem4s to fetch.
     */
    orderBy?: Sem4OrderByWithRelationInput | Sem4OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sem4s.
     */
    cursor?: Sem4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem4s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem4s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sem4s.
     */
    distinct?: Sem4ScalarFieldEnum | Sem4ScalarFieldEnum[]
  }

  /**
   * Sem4 findFirstOrThrow
   */
  export type Sem4FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter, which Sem4 to fetch.
     */
    where?: Sem4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem4s to fetch.
     */
    orderBy?: Sem4OrderByWithRelationInput | Sem4OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sem4s.
     */
    cursor?: Sem4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem4s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem4s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sem4s.
     */
    distinct?: Sem4ScalarFieldEnum | Sem4ScalarFieldEnum[]
  }

  /**
   * Sem4 findMany
   */
  export type Sem4FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter, which Sem4s to fetch.
     */
    where?: Sem4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sem4s to fetch.
     */
    orderBy?: Sem4OrderByWithRelationInput | Sem4OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sem4s.
     */
    cursor?: Sem4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sem4s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sem4s.
     */
    skip?: number
    distinct?: Sem4ScalarFieldEnum | Sem4ScalarFieldEnum[]
  }

  /**
   * Sem4 create
   */
  export type Sem4CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * The data needed to create a Sem4.
     */
    data: XOR<Sem4CreateInput, Sem4UncheckedCreateInput>
  }

  /**
   * Sem4 createMany
   */
  export type Sem4CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sem4s.
     */
    data: Sem4CreateManyInput | Sem4CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sem4 createManyAndReturn
   */
  export type Sem4CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * The data used to create many Sem4s.
     */
    data: Sem4CreateManyInput | Sem4CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sem4 update
   */
  export type Sem4UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * The data needed to update a Sem4.
     */
    data: XOR<Sem4UpdateInput, Sem4UncheckedUpdateInput>
    /**
     * Choose, which Sem4 to update.
     */
    where: Sem4WhereUniqueInput
  }

  /**
   * Sem4 updateMany
   */
  export type Sem4UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sem4s.
     */
    data: XOR<Sem4UpdateManyMutationInput, Sem4UncheckedUpdateManyInput>
    /**
     * Filter which Sem4s to update
     */
    where?: Sem4WhereInput
    /**
     * Limit how many Sem4s to update.
     */
    limit?: number
  }

  /**
   * Sem4 updateManyAndReturn
   */
  export type Sem4UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * The data used to update Sem4s.
     */
    data: XOR<Sem4UpdateManyMutationInput, Sem4UncheckedUpdateManyInput>
    /**
     * Filter which Sem4s to update
     */
    where?: Sem4WhereInput
    /**
     * Limit how many Sem4s to update.
     */
    limit?: number
  }

  /**
   * Sem4 upsert
   */
  export type Sem4UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * The filter to search for the Sem4 to update in case it exists.
     */
    where: Sem4WhereUniqueInput
    /**
     * In case the Sem4 found by the `where` argument doesn't exist, create a new Sem4 with this data.
     */
    create: XOR<Sem4CreateInput, Sem4UncheckedCreateInput>
    /**
     * In case the Sem4 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sem4UpdateInput, Sem4UncheckedUpdateInput>
  }

  /**
   * Sem4 delete
   */
  export type Sem4DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
    /**
     * Filter which Sem4 to delete.
     */
    where: Sem4WhereUniqueInput
  }

  /**
   * Sem4 deleteMany
   */
  export type Sem4DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sem4s to delete
     */
    where?: Sem4WhereInput
    /**
     * Limit how many Sem4s to delete.
     */
    limit?: number
  }

  /**
   * Sem4 without action
   */
  export type Sem4DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sem4
     */
    select?: Sem4Select<ExtArgs> | null
    /**
     * Omit specific fields from the Sem4
     */
    omit?: Sem4Omit<ExtArgs> | null
  }


  /**
   * Model batch_2024_25
   */

  export type AggregateBatch_2024_25 = {
    _count: Batch_2024_25CountAggregateOutputType | null
    _avg: Batch_2024_25AvgAggregateOutputType | null
    _sum: Batch_2024_25SumAggregateOutputType | null
    _min: Batch_2024_25MinAggregateOutputType | null
    _max: Batch_2024_25MaxAggregateOutputType | null
  }

  export type Batch_2024_25AvgAggregateOutputType = {
    id: number | null
    admission_no: number | null
  }

  export type Batch_2024_25SumAggregateOutputType = {
    id: number | null
    admission_no: number | null
  }

  export type Batch_2024_25MinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    pincode: string | null
    student_mobile: string | null
    parent_mobile: string | null
    email: string | null
    birthdate: string | null
    gender: string | null
    aadhar_no: string | null
    religion: string | null
    cast: string | null
    stream: string | null
    tenth_percent: string | null
    twelfth_percent: string | null
    admission_no: number | null
  }

  export type Batch_2024_25MaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    pincode: string | null
    student_mobile: string | null
    parent_mobile: string | null
    email: string | null
    birthdate: string | null
    gender: string | null
    aadhar_no: string | null
    religion: string | null
    cast: string | null
    stream: string | null
    tenth_percent: string | null
    twelfth_percent: string | null
    admission_no: number | null
  }

  export type Batch_2024_25CountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    pincode: number
    student_mobile: number
    parent_mobile: number
    email: number
    birthdate: number
    gender: number
    aadhar_no: number
    religion: number
    cast: number
    stream: number
    tenth_percent: number
    twelfth_percent: number
    admission_no: number
    _all: number
  }


  export type Batch_2024_25AvgAggregateInputType = {
    id?: true
    admission_no?: true
  }

  export type Batch_2024_25SumAggregateInputType = {
    id?: true
    admission_no?: true
  }

  export type Batch_2024_25MinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    pincode?: true
    student_mobile?: true
    parent_mobile?: true
    email?: true
    birthdate?: true
    gender?: true
    aadhar_no?: true
    religion?: true
    cast?: true
    stream?: true
    tenth_percent?: true
    twelfth_percent?: true
    admission_no?: true
  }

  export type Batch_2024_25MaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    pincode?: true
    student_mobile?: true
    parent_mobile?: true
    email?: true
    birthdate?: true
    gender?: true
    aadhar_no?: true
    religion?: true
    cast?: true
    stream?: true
    tenth_percent?: true
    twelfth_percent?: true
    admission_no?: true
  }

  export type Batch_2024_25CountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    pincode?: true
    student_mobile?: true
    parent_mobile?: true
    email?: true
    birthdate?: true
    gender?: true
    aadhar_no?: true
    religion?: true
    cast?: true
    stream?: true
    tenth_percent?: true
    twelfth_percent?: true
    admission_no?: true
    _all?: true
  }

  export type Batch_2024_25AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batch_2024_25 to aggregate.
     */
    where?: batch_2024_25WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2024_25s to fetch.
     */
    orderBy?: batch_2024_25OrderByWithRelationInput | batch_2024_25OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: batch_2024_25WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2024_25s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2024_25s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned batch_2024_25s
    **/
    _count?: true | Batch_2024_25CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Batch_2024_25AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Batch_2024_25SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Batch_2024_25MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Batch_2024_25MaxAggregateInputType
  }

  export type GetBatch_2024_25AggregateType<T extends Batch_2024_25AggregateArgs> = {
        [P in keyof T & keyof AggregateBatch_2024_25]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch_2024_25[P]>
      : GetScalarType<T[P], AggregateBatch_2024_25[P]>
  }




  export type batch_2024_25GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: batch_2024_25WhereInput
    orderBy?: batch_2024_25OrderByWithAggregationInput | batch_2024_25OrderByWithAggregationInput[]
    by: Batch_2024_25ScalarFieldEnum[] | Batch_2024_25ScalarFieldEnum
    having?: batch_2024_25ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Batch_2024_25CountAggregateInputType | true
    _avg?: Batch_2024_25AvgAggregateInputType
    _sum?: Batch_2024_25SumAggregateInputType
    _min?: Batch_2024_25MinAggregateInputType
    _max?: Batch_2024_25MaxAggregateInputType
  }

  export type Batch_2024_25GroupByOutputType = {
    id: number
    name: string
    address: string
    city: string
    pincode: string
    student_mobile: string
    parent_mobile: string
    email: string
    birthdate: string
    gender: string
    aadhar_no: string
    religion: string
    cast: string
    stream: string
    tenth_percent: string
    twelfth_percent: string
    admission_no: number
    _count: Batch_2024_25CountAggregateOutputType | null
    _avg: Batch_2024_25AvgAggregateOutputType | null
    _sum: Batch_2024_25SumAggregateOutputType | null
    _min: Batch_2024_25MinAggregateOutputType | null
    _max: Batch_2024_25MaxAggregateOutputType | null
  }

  type GetBatch_2024_25GroupByPayload<T extends batch_2024_25GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Batch_2024_25GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Batch_2024_25GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Batch_2024_25GroupByOutputType[P]>
            : GetScalarType<T[P], Batch_2024_25GroupByOutputType[P]>
        }
      >
    >


  export type batch_2024_25Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    student_mobile?: boolean
    parent_mobile?: boolean
    email?: boolean
    birthdate?: boolean
    gender?: boolean
    aadhar_no?: boolean
    religion?: boolean
    cast?: boolean
    stream?: boolean
    tenth_percent?: boolean
    twelfth_percent?: boolean
    admission_no?: boolean
  }, ExtArgs["result"]["batch_2024_25"]>

  export type batch_2024_25SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    student_mobile?: boolean
    parent_mobile?: boolean
    email?: boolean
    birthdate?: boolean
    gender?: boolean
    aadhar_no?: boolean
    religion?: boolean
    cast?: boolean
    stream?: boolean
    tenth_percent?: boolean
    twelfth_percent?: boolean
    admission_no?: boolean
  }, ExtArgs["result"]["batch_2024_25"]>

  export type batch_2024_25SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    student_mobile?: boolean
    parent_mobile?: boolean
    email?: boolean
    birthdate?: boolean
    gender?: boolean
    aadhar_no?: boolean
    religion?: boolean
    cast?: boolean
    stream?: boolean
    tenth_percent?: boolean
    twelfth_percent?: boolean
    admission_no?: boolean
  }, ExtArgs["result"]["batch_2024_25"]>

  export type batch_2024_25SelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    student_mobile?: boolean
    parent_mobile?: boolean
    email?: boolean
    birthdate?: boolean
    gender?: boolean
    aadhar_no?: boolean
    religion?: boolean
    cast?: boolean
    stream?: boolean
    tenth_percent?: boolean
    twelfth_percent?: boolean
    admission_no?: boolean
  }

  export type batch_2024_25Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "pincode" | "student_mobile" | "parent_mobile" | "email" | "birthdate" | "gender" | "aadhar_no" | "religion" | "cast" | "stream" | "tenth_percent" | "twelfth_percent" | "admission_no", ExtArgs["result"]["batch_2024_25"]>

  export type $batch_2024_25Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "batch_2024_25"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      city: string
      pincode: string
      student_mobile: string
      parent_mobile: string
      email: string
      birthdate: string
      gender: string
      aadhar_no: string
      religion: string
      cast: string
      stream: string
      tenth_percent: string
      twelfth_percent: string
      admission_no: number
    }, ExtArgs["result"]["batch_2024_25"]>
    composites: {}
  }

  type batch_2024_25GetPayload<S extends boolean | null | undefined | batch_2024_25DefaultArgs> = $Result.GetResult<Prisma.$batch_2024_25Payload, S>

  type batch_2024_25CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<batch_2024_25FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Batch_2024_25CountAggregateInputType | true
    }

  export interface batch_2024_25Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['batch_2024_25'], meta: { name: 'batch_2024_25' } }
    /**
     * Find zero or one Batch_2024_25 that matches the filter.
     * @param {batch_2024_25FindUniqueArgs} args - Arguments to find a Batch_2024_25
     * @example
     * // Get one Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends batch_2024_25FindUniqueArgs>(args: SelectSubset<T, batch_2024_25FindUniqueArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch_2024_25 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {batch_2024_25FindUniqueOrThrowArgs} args - Arguments to find a Batch_2024_25
     * @example
     * // Get one Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends batch_2024_25FindUniqueOrThrowArgs>(args: SelectSubset<T, batch_2024_25FindUniqueOrThrowArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch_2024_25 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25FindFirstArgs} args - Arguments to find a Batch_2024_25
     * @example
     * // Get one Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends batch_2024_25FindFirstArgs>(args?: SelectSubset<T, batch_2024_25FindFirstArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch_2024_25 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25FindFirstOrThrowArgs} args - Arguments to find a Batch_2024_25
     * @example
     * // Get one Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends batch_2024_25FindFirstOrThrowArgs>(args?: SelectSubset<T, batch_2024_25FindFirstOrThrowArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batch_2024_25s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batch_2024_25s
     * const batch_2024_25s = await prisma.batch_2024_25.findMany()
     * 
     * // Get first 10 Batch_2024_25s
     * const batch_2024_25s = await prisma.batch_2024_25.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batch_2024_25WithIdOnly = await prisma.batch_2024_25.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends batch_2024_25FindManyArgs>(args?: SelectSubset<T, batch_2024_25FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch_2024_25.
     * @param {batch_2024_25CreateArgs} args - Arguments to create a Batch_2024_25.
     * @example
     * // Create one Batch_2024_25
     * const Batch_2024_25 = await prisma.batch_2024_25.create({
     *   data: {
     *     // ... data to create a Batch_2024_25
     *   }
     * })
     * 
     */
    create<T extends batch_2024_25CreateArgs>(args: SelectSubset<T, batch_2024_25CreateArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batch_2024_25s.
     * @param {batch_2024_25CreateManyArgs} args - Arguments to create many Batch_2024_25s.
     * @example
     * // Create many Batch_2024_25s
     * const batch_2024_25 = await prisma.batch_2024_25.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends batch_2024_25CreateManyArgs>(args?: SelectSubset<T, batch_2024_25CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batch_2024_25s and returns the data saved in the database.
     * @param {batch_2024_25CreateManyAndReturnArgs} args - Arguments to create many Batch_2024_25s.
     * @example
     * // Create many Batch_2024_25s
     * const batch_2024_25 = await prisma.batch_2024_25.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batch_2024_25s and only return the `id`
     * const batch_2024_25WithIdOnly = await prisma.batch_2024_25.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends batch_2024_25CreateManyAndReturnArgs>(args?: SelectSubset<T, batch_2024_25CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch_2024_25.
     * @param {batch_2024_25DeleteArgs} args - Arguments to delete one Batch_2024_25.
     * @example
     * // Delete one Batch_2024_25
     * const Batch_2024_25 = await prisma.batch_2024_25.delete({
     *   where: {
     *     // ... filter to delete one Batch_2024_25
     *   }
     * })
     * 
     */
    delete<T extends batch_2024_25DeleteArgs>(args: SelectSubset<T, batch_2024_25DeleteArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch_2024_25.
     * @param {batch_2024_25UpdateArgs} args - Arguments to update one Batch_2024_25.
     * @example
     * // Update one Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends batch_2024_25UpdateArgs>(args: SelectSubset<T, batch_2024_25UpdateArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batch_2024_25s.
     * @param {batch_2024_25DeleteManyArgs} args - Arguments to filter Batch_2024_25s to delete.
     * @example
     * // Delete a few Batch_2024_25s
     * const { count } = await prisma.batch_2024_25.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends batch_2024_25DeleteManyArgs>(args?: SelectSubset<T, batch_2024_25DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batch_2024_25s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batch_2024_25s
     * const batch_2024_25 = await prisma.batch_2024_25.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends batch_2024_25UpdateManyArgs>(args: SelectSubset<T, batch_2024_25UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batch_2024_25s and returns the data updated in the database.
     * @param {batch_2024_25UpdateManyAndReturnArgs} args - Arguments to update many Batch_2024_25s.
     * @example
     * // Update many Batch_2024_25s
     * const batch_2024_25 = await prisma.batch_2024_25.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batch_2024_25s and only return the `id`
     * const batch_2024_25WithIdOnly = await prisma.batch_2024_25.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends batch_2024_25UpdateManyAndReturnArgs>(args: SelectSubset<T, batch_2024_25UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch_2024_25.
     * @param {batch_2024_25UpsertArgs} args - Arguments to update or create a Batch_2024_25.
     * @example
     * // Update or create a Batch_2024_25
     * const batch_2024_25 = await prisma.batch_2024_25.upsert({
     *   create: {
     *     // ... data to create a Batch_2024_25
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch_2024_25 we want to update
     *   }
     * })
     */
    upsert<T extends batch_2024_25UpsertArgs>(args: SelectSubset<T, batch_2024_25UpsertArgs<ExtArgs>>): Prisma__batch_2024_25Client<$Result.GetResult<Prisma.$batch_2024_25Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batch_2024_25s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25CountArgs} args - Arguments to filter Batch_2024_25s to count.
     * @example
     * // Count the number of Batch_2024_25s
     * const count = await prisma.batch_2024_25.count({
     *   where: {
     *     // ... the filter for the Batch_2024_25s we want to count
     *   }
     * })
    **/
    count<T extends batch_2024_25CountArgs>(
      args?: Subset<T, batch_2024_25CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Batch_2024_25CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch_2024_25.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Batch_2024_25AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Batch_2024_25AggregateArgs>(args: Subset<T, Batch_2024_25AggregateArgs>): Prisma.PrismaPromise<GetBatch_2024_25AggregateType<T>>

    /**
     * Group by Batch_2024_25.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2024_25GroupByArgs} args - Group by arguments.
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
      T extends batch_2024_25GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: batch_2024_25GroupByArgs['orderBy'] }
        : { orderBy?: batch_2024_25GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, batch_2024_25GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatch_2024_25GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the batch_2024_25 model
   */
  readonly fields: batch_2024_25FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for batch_2024_25.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__batch_2024_25Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the batch_2024_25 model
   */
  interface batch_2024_25FieldRefs {
    readonly id: FieldRef<"batch_2024_25", 'Int'>
    readonly name: FieldRef<"batch_2024_25", 'String'>
    readonly address: FieldRef<"batch_2024_25", 'String'>
    readonly city: FieldRef<"batch_2024_25", 'String'>
    readonly pincode: FieldRef<"batch_2024_25", 'String'>
    readonly student_mobile: FieldRef<"batch_2024_25", 'String'>
    readonly parent_mobile: FieldRef<"batch_2024_25", 'String'>
    readonly email: FieldRef<"batch_2024_25", 'String'>
    readonly birthdate: FieldRef<"batch_2024_25", 'String'>
    readonly gender: FieldRef<"batch_2024_25", 'String'>
    readonly aadhar_no: FieldRef<"batch_2024_25", 'String'>
    readonly religion: FieldRef<"batch_2024_25", 'String'>
    readonly cast: FieldRef<"batch_2024_25", 'String'>
    readonly stream: FieldRef<"batch_2024_25", 'String'>
    readonly tenth_percent: FieldRef<"batch_2024_25", 'String'>
    readonly twelfth_percent: FieldRef<"batch_2024_25", 'String'>
    readonly admission_no: FieldRef<"batch_2024_25", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * batch_2024_25 findUnique
   */
  export type batch_2024_25FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter, which batch_2024_25 to fetch.
     */
    where: batch_2024_25WhereUniqueInput
  }

  /**
   * batch_2024_25 findUniqueOrThrow
   */
  export type batch_2024_25FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter, which batch_2024_25 to fetch.
     */
    where: batch_2024_25WhereUniqueInput
  }

  /**
   * batch_2024_25 findFirst
   */
  export type batch_2024_25FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter, which batch_2024_25 to fetch.
     */
    where?: batch_2024_25WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2024_25s to fetch.
     */
    orderBy?: batch_2024_25OrderByWithRelationInput | batch_2024_25OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batch_2024_25s.
     */
    cursor?: batch_2024_25WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2024_25s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2024_25s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batch_2024_25s.
     */
    distinct?: Batch_2024_25ScalarFieldEnum | Batch_2024_25ScalarFieldEnum[]
  }

  /**
   * batch_2024_25 findFirstOrThrow
   */
  export type batch_2024_25FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter, which batch_2024_25 to fetch.
     */
    where?: batch_2024_25WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2024_25s to fetch.
     */
    orderBy?: batch_2024_25OrderByWithRelationInput | batch_2024_25OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batch_2024_25s.
     */
    cursor?: batch_2024_25WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2024_25s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2024_25s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batch_2024_25s.
     */
    distinct?: Batch_2024_25ScalarFieldEnum | Batch_2024_25ScalarFieldEnum[]
  }

  /**
   * batch_2024_25 findMany
   */
  export type batch_2024_25FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter, which batch_2024_25s to fetch.
     */
    where?: batch_2024_25WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2024_25s to fetch.
     */
    orderBy?: batch_2024_25OrderByWithRelationInput | batch_2024_25OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing batch_2024_25s.
     */
    cursor?: batch_2024_25WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2024_25s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2024_25s.
     */
    skip?: number
    distinct?: Batch_2024_25ScalarFieldEnum | Batch_2024_25ScalarFieldEnum[]
  }

  /**
   * batch_2024_25 create
   */
  export type batch_2024_25CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * The data needed to create a batch_2024_25.
     */
    data: XOR<batch_2024_25CreateInput, batch_2024_25UncheckedCreateInput>
  }

  /**
   * batch_2024_25 createMany
   */
  export type batch_2024_25CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many batch_2024_25s.
     */
    data: batch_2024_25CreateManyInput | batch_2024_25CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * batch_2024_25 createManyAndReturn
   */
  export type batch_2024_25CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * The data used to create many batch_2024_25s.
     */
    data: batch_2024_25CreateManyInput | batch_2024_25CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * batch_2024_25 update
   */
  export type batch_2024_25UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * The data needed to update a batch_2024_25.
     */
    data: XOR<batch_2024_25UpdateInput, batch_2024_25UncheckedUpdateInput>
    /**
     * Choose, which batch_2024_25 to update.
     */
    where: batch_2024_25WhereUniqueInput
  }

  /**
   * batch_2024_25 updateMany
   */
  export type batch_2024_25UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update batch_2024_25s.
     */
    data: XOR<batch_2024_25UpdateManyMutationInput, batch_2024_25UncheckedUpdateManyInput>
    /**
     * Filter which batch_2024_25s to update
     */
    where?: batch_2024_25WhereInput
    /**
     * Limit how many batch_2024_25s to update.
     */
    limit?: number
  }

  /**
   * batch_2024_25 updateManyAndReturn
   */
  export type batch_2024_25UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * The data used to update batch_2024_25s.
     */
    data: XOR<batch_2024_25UpdateManyMutationInput, batch_2024_25UncheckedUpdateManyInput>
    /**
     * Filter which batch_2024_25s to update
     */
    where?: batch_2024_25WhereInput
    /**
     * Limit how many batch_2024_25s to update.
     */
    limit?: number
  }

  /**
   * batch_2024_25 upsert
   */
  export type batch_2024_25UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * The filter to search for the batch_2024_25 to update in case it exists.
     */
    where: batch_2024_25WhereUniqueInput
    /**
     * In case the batch_2024_25 found by the `where` argument doesn't exist, create a new batch_2024_25 with this data.
     */
    create: XOR<batch_2024_25CreateInput, batch_2024_25UncheckedCreateInput>
    /**
     * In case the batch_2024_25 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<batch_2024_25UpdateInput, batch_2024_25UncheckedUpdateInput>
  }

  /**
   * batch_2024_25 delete
   */
  export type batch_2024_25DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
    /**
     * Filter which batch_2024_25 to delete.
     */
    where: batch_2024_25WhereUniqueInput
  }

  /**
   * batch_2024_25 deleteMany
   */
  export type batch_2024_25DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batch_2024_25s to delete
     */
    where?: batch_2024_25WhereInput
    /**
     * Limit how many batch_2024_25s to delete.
     */
    limit?: number
  }

  /**
   * batch_2024_25 without action
   */
  export type batch_2024_25DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2024_25
     */
    select?: batch_2024_25Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2024_25
     */
    omit?: batch_2024_25Omit<ExtArgs> | null
  }


  /**
   * Model batch_2023_24
   */

  export type AggregateBatch_2023_24 = {
    _count: Batch_2023_24CountAggregateOutputType | null
    _avg: Batch_2023_24AvgAggregateOutputType | null
    _sum: Batch_2023_24SumAggregateOutputType | null
    _min: Batch_2023_24MinAggregateOutputType | null
    _max: Batch_2023_24MaxAggregateOutputType | null
  }

  export type Batch_2023_24AvgAggregateOutputType = {
    id: number | null
    RollNoSem5: number | null
    RollNoSem4: number | null
    RollNoSem3: number | null
  }

  export type Batch_2023_24SumAggregateOutputType = {
    id: number | null
    RollNoSem5: number | null
    RollNoSem4: number | null
    RollNoSem3: number | null
  }

  export type Batch_2023_24MinAggregateOutputType = {
    id: number | null
    StudentId: string | null
    StudentName: string | null
    RollNoSem1: string | null
    AdmissionApplicationNo: string | null
    Altmail: string | null
    FNum: string | null
    Gender: string | null
    MNum: string | null
    PhNum1: string | null
    PhNum2: string | null
    RollNoSem5: number | null
    aadhaar_number: string | null
    abc_id: string | null
    dob: string | null
    mail: string | null
    mobile_number_registered_with_aadhar: string | null
    RollNoSem4: number | null
    RollNoSem2: string | null
    RollNoSem3: number | null
  }

  export type Batch_2023_24MaxAggregateOutputType = {
    id: number | null
    StudentId: string | null
    StudentName: string | null
    RollNoSem1: string | null
    AdmissionApplicationNo: string | null
    Altmail: string | null
    FNum: string | null
    Gender: string | null
    MNum: string | null
    PhNum1: string | null
    PhNum2: string | null
    RollNoSem5: number | null
    aadhaar_number: string | null
    abc_id: string | null
    dob: string | null
    mail: string | null
    mobile_number_registered_with_aadhar: string | null
    RollNoSem4: number | null
    RollNoSem2: string | null
    RollNoSem3: number | null
  }

  export type Batch_2023_24CountAggregateOutputType = {
    id: number
    StudentId: number
    StudentName: number
    RollNoSem1: number
    AdmissionApplicationNo: number
    Altmail: number
    FNum: number
    Gender: number
    MNum: number
    PhNum1: number
    PhNum2: number
    RollNoSem5: number
    aadhaar_number: number
    abc_id: number
    dob: number
    mail: number
    mobile_number_registered_with_aadhar: number
    RollNoSem4: number
    RollNoSem2: number
    RollNoSem3: number
    _all: number
  }


  export type Batch_2023_24AvgAggregateInputType = {
    id?: true
    RollNoSem5?: true
    RollNoSem4?: true
    RollNoSem3?: true
  }

  export type Batch_2023_24SumAggregateInputType = {
    id?: true
    RollNoSem5?: true
    RollNoSem4?: true
    RollNoSem3?: true
  }

  export type Batch_2023_24MinAggregateInputType = {
    id?: true
    StudentId?: true
    StudentName?: true
    RollNoSem1?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    RollNoSem5?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mail?: true
    mobile_number_registered_with_aadhar?: true
    RollNoSem4?: true
    RollNoSem2?: true
    RollNoSem3?: true
  }

  export type Batch_2023_24MaxAggregateInputType = {
    id?: true
    StudentId?: true
    StudentName?: true
    RollNoSem1?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    RollNoSem5?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mail?: true
    mobile_number_registered_with_aadhar?: true
    RollNoSem4?: true
    RollNoSem2?: true
    RollNoSem3?: true
  }

  export type Batch_2023_24CountAggregateInputType = {
    id?: true
    StudentId?: true
    StudentName?: true
    RollNoSem1?: true
    AdmissionApplicationNo?: true
    Altmail?: true
    FNum?: true
    Gender?: true
    MNum?: true
    PhNum1?: true
    PhNum2?: true
    RollNoSem5?: true
    aadhaar_number?: true
    abc_id?: true
    dob?: true
    mail?: true
    mobile_number_registered_with_aadhar?: true
    RollNoSem4?: true
    RollNoSem2?: true
    RollNoSem3?: true
    _all?: true
  }

  export type Batch_2023_24AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batch_2023_24 to aggregate.
     */
    where?: batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2023_24s to fetch.
     */
    orderBy?: batch_2023_24OrderByWithRelationInput | batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned batch_2023_24s
    **/
    _count?: true | Batch_2023_24CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Batch_2023_24AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Batch_2023_24SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Batch_2023_24MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Batch_2023_24MaxAggregateInputType
  }

  export type GetBatch_2023_24AggregateType<T extends Batch_2023_24AggregateArgs> = {
        [P in keyof T & keyof AggregateBatch_2023_24]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch_2023_24[P]>
      : GetScalarType<T[P], AggregateBatch_2023_24[P]>
  }




  export type batch_2023_24GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: batch_2023_24WhereInput
    orderBy?: batch_2023_24OrderByWithAggregationInput | batch_2023_24OrderByWithAggregationInput[]
    by: Batch_2023_24ScalarFieldEnum[] | Batch_2023_24ScalarFieldEnum
    having?: batch_2023_24ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Batch_2023_24CountAggregateInputType | true
    _avg?: Batch_2023_24AvgAggregateInputType
    _sum?: Batch_2023_24SumAggregateInputType
    _min?: Batch_2023_24MinAggregateInputType
    _max?: Batch_2023_24MaxAggregateInputType
  }

  export type Batch_2023_24GroupByOutputType = {
    id: number
    StudentId: string
    StudentName: string
    RollNoSem1: string
    AdmissionApplicationNo: string
    Altmail: string
    FNum: string
    Gender: string
    MNum: string
    PhNum1: string
    PhNum2: string
    RollNoSem5: number
    aadhaar_number: string
    abc_id: string
    dob: string
    mail: string
    mobile_number_registered_with_aadhar: string
    RollNoSem4: number
    RollNoSem2: string
    RollNoSem3: number
    _count: Batch_2023_24CountAggregateOutputType | null
    _avg: Batch_2023_24AvgAggregateOutputType | null
    _sum: Batch_2023_24SumAggregateOutputType | null
    _min: Batch_2023_24MinAggregateOutputType | null
    _max: Batch_2023_24MaxAggregateOutputType | null
  }

  type GetBatch_2023_24GroupByPayload<T extends batch_2023_24GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Batch_2023_24GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Batch_2023_24GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Batch_2023_24GroupByOutputType[P]>
            : GetScalarType<T[P], Batch_2023_24GroupByOutputType[P]>
        }
      >
    >


  export type batch_2023_24Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StudentId?: boolean
    StudentName?: boolean
    RollNoSem1?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    RollNoSem5?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mail?: boolean
    mobile_number_registered_with_aadhar?: boolean
    RollNoSem4?: boolean
    RollNoSem2?: boolean
    RollNoSem3?: boolean
  }, ExtArgs["result"]["batch_2023_24"]>

  export type batch_2023_24SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StudentId?: boolean
    StudentName?: boolean
    RollNoSem1?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    RollNoSem5?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mail?: boolean
    mobile_number_registered_with_aadhar?: boolean
    RollNoSem4?: boolean
    RollNoSem2?: boolean
    RollNoSem3?: boolean
  }, ExtArgs["result"]["batch_2023_24"]>

  export type batch_2023_24SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StudentId?: boolean
    StudentName?: boolean
    RollNoSem1?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    RollNoSem5?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mail?: boolean
    mobile_number_registered_with_aadhar?: boolean
    RollNoSem4?: boolean
    RollNoSem2?: boolean
    RollNoSem3?: boolean
  }, ExtArgs["result"]["batch_2023_24"]>

  export type batch_2023_24SelectScalar = {
    id?: boolean
    StudentId?: boolean
    StudentName?: boolean
    RollNoSem1?: boolean
    AdmissionApplicationNo?: boolean
    Altmail?: boolean
    FNum?: boolean
    Gender?: boolean
    MNum?: boolean
    PhNum1?: boolean
    PhNum2?: boolean
    RollNoSem5?: boolean
    aadhaar_number?: boolean
    abc_id?: boolean
    dob?: boolean
    mail?: boolean
    mobile_number_registered_with_aadhar?: boolean
    RollNoSem4?: boolean
    RollNoSem2?: boolean
    RollNoSem3?: boolean
  }

  export type batch_2023_24Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "StudentId" | "StudentName" | "RollNoSem1" | "AdmissionApplicationNo" | "Altmail" | "FNum" | "Gender" | "MNum" | "PhNum1" | "PhNum2" | "RollNoSem5" | "aadhaar_number" | "abc_id" | "dob" | "mail" | "mobile_number_registered_with_aadhar" | "RollNoSem4" | "RollNoSem2" | "RollNoSem3", ExtArgs["result"]["batch_2023_24"]>

  export type $batch_2023_24Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "batch_2023_24"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      StudentId: string
      StudentName: string
      RollNoSem1: string
      AdmissionApplicationNo: string
      Altmail: string
      FNum: string
      Gender: string
      MNum: string
      PhNum1: string
      PhNum2: string
      RollNoSem5: number
      aadhaar_number: string
      abc_id: string
      dob: string
      mail: string
      mobile_number_registered_with_aadhar: string
      RollNoSem4: number
      RollNoSem2: string
      RollNoSem3: number
    }, ExtArgs["result"]["batch_2023_24"]>
    composites: {}
  }

  type batch_2023_24GetPayload<S extends boolean | null | undefined | batch_2023_24DefaultArgs> = $Result.GetResult<Prisma.$batch_2023_24Payload, S>

  type batch_2023_24CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<batch_2023_24FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Batch_2023_24CountAggregateInputType | true
    }

  export interface batch_2023_24Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['batch_2023_24'], meta: { name: 'batch_2023_24' } }
    /**
     * Find zero or one Batch_2023_24 that matches the filter.
     * @param {batch_2023_24FindUniqueArgs} args - Arguments to find a Batch_2023_24
     * @example
     * // Get one Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends batch_2023_24FindUniqueArgs>(args: SelectSubset<T, batch_2023_24FindUniqueArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch_2023_24 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {batch_2023_24FindUniqueOrThrowArgs} args - Arguments to find a Batch_2023_24
     * @example
     * // Get one Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends batch_2023_24FindUniqueOrThrowArgs>(args: SelectSubset<T, batch_2023_24FindUniqueOrThrowArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch_2023_24 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24FindFirstArgs} args - Arguments to find a Batch_2023_24
     * @example
     * // Get one Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends batch_2023_24FindFirstArgs>(args?: SelectSubset<T, batch_2023_24FindFirstArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch_2023_24 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24FindFirstOrThrowArgs} args - Arguments to find a Batch_2023_24
     * @example
     * // Get one Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends batch_2023_24FindFirstOrThrowArgs>(args?: SelectSubset<T, batch_2023_24FindFirstOrThrowArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batch_2023_24s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batch_2023_24s
     * const batch_2023_24s = await prisma.batch_2023_24.findMany()
     * 
     * // Get first 10 Batch_2023_24s
     * const batch_2023_24s = await prisma.batch_2023_24.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batch_2023_24WithIdOnly = await prisma.batch_2023_24.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends batch_2023_24FindManyArgs>(args?: SelectSubset<T, batch_2023_24FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch_2023_24.
     * @param {batch_2023_24CreateArgs} args - Arguments to create a Batch_2023_24.
     * @example
     * // Create one Batch_2023_24
     * const Batch_2023_24 = await prisma.batch_2023_24.create({
     *   data: {
     *     // ... data to create a Batch_2023_24
     *   }
     * })
     * 
     */
    create<T extends batch_2023_24CreateArgs>(args: SelectSubset<T, batch_2023_24CreateArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batch_2023_24s.
     * @param {batch_2023_24CreateManyArgs} args - Arguments to create many Batch_2023_24s.
     * @example
     * // Create many Batch_2023_24s
     * const batch_2023_24 = await prisma.batch_2023_24.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends batch_2023_24CreateManyArgs>(args?: SelectSubset<T, batch_2023_24CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batch_2023_24s and returns the data saved in the database.
     * @param {batch_2023_24CreateManyAndReturnArgs} args - Arguments to create many Batch_2023_24s.
     * @example
     * // Create many Batch_2023_24s
     * const batch_2023_24 = await prisma.batch_2023_24.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batch_2023_24s and only return the `id`
     * const batch_2023_24WithIdOnly = await prisma.batch_2023_24.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends batch_2023_24CreateManyAndReturnArgs>(args?: SelectSubset<T, batch_2023_24CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch_2023_24.
     * @param {batch_2023_24DeleteArgs} args - Arguments to delete one Batch_2023_24.
     * @example
     * // Delete one Batch_2023_24
     * const Batch_2023_24 = await prisma.batch_2023_24.delete({
     *   where: {
     *     // ... filter to delete one Batch_2023_24
     *   }
     * })
     * 
     */
    delete<T extends batch_2023_24DeleteArgs>(args: SelectSubset<T, batch_2023_24DeleteArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch_2023_24.
     * @param {batch_2023_24UpdateArgs} args - Arguments to update one Batch_2023_24.
     * @example
     * // Update one Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends batch_2023_24UpdateArgs>(args: SelectSubset<T, batch_2023_24UpdateArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batch_2023_24s.
     * @param {batch_2023_24DeleteManyArgs} args - Arguments to filter Batch_2023_24s to delete.
     * @example
     * // Delete a few Batch_2023_24s
     * const { count } = await prisma.batch_2023_24.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends batch_2023_24DeleteManyArgs>(args?: SelectSubset<T, batch_2023_24DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batch_2023_24s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batch_2023_24s
     * const batch_2023_24 = await prisma.batch_2023_24.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends batch_2023_24UpdateManyArgs>(args: SelectSubset<T, batch_2023_24UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batch_2023_24s and returns the data updated in the database.
     * @param {batch_2023_24UpdateManyAndReturnArgs} args - Arguments to update many Batch_2023_24s.
     * @example
     * // Update many Batch_2023_24s
     * const batch_2023_24 = await prisma.batch_2023_24.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batch_2023_24s and only return the `id`
     * const batch_2023_24WithIdOnly = await prisma.batch_2023_24.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends batch_2023_24UpdateManyAndReturnArgs>(args: SelectSubset<T, batch_2023_24UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch_2023_24.
     * @param {batch_2023_24UpsertArgs} args - Arguments to update or create a Batch_2023_24.
     * @example
     * // Update or create a Batch_2023_24
     * const batch_2023_24 = await prisma.batch_2023_24.upsert({
     *   create: {
     *     // ... data to create a Batch_2023_24
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch_2023_24 we want to update
     *   }
     * })
     */
    upsert<T extends batch_2023_24UpsertArgs>(args: SelectSubset<T, batch_2023_24UpsertArgs<ExtArgs>>): Prisma__batch_2023_24Client<$Result.GetResult<Prisma.$batch_2023_24Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batch_2023_24s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24CountArgs} args - Arguments to filter Batch_2023_24s to count.
     * @example
     * // Count the number of Batch_2023_24s
     * const count = await prisma.batch_2023_24.count({
     *   where: {
     *     // ... the filter for the Batch_2023_24s we want to count
     *   }
     * })
    **/
    count<T extends batch_2023_24CountArgs>(
      args?: Subset<T, batch_2023_24CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Batch_2023_24CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch_2023_24.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Batch_2023_24AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Batch_2023_24AggregateArgs>(args: Subset<T, Batch_2023_24AggregateArgs>): Prisma.PrismaPromise<GetBatch_2023_24AggregateType<T>>

    /**
     * Group by Batch_2023_24.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batch_2023_24GroupByArgs} args - Group by arguments.
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
      T extends batch_2023_24GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: batch_2023_24GroupByArgs['orderBy'] }
        : { orderBy?: batch_2023_24GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, batch_2023_24GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatch_2023_24GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the batch_2023_24 model
   */
  readonly fields: batch_2023_24FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for batch_2023_24.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__batch_2023_24Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the batch_2023_24 model
   */
  interface batch_2023_24FieldRefs {
    readonly id: FieldRef<"batch_2023_24", 'Int'>
    readonly StudentId: FieldRef<"batch_2023_24", 'String'>
    readonly StudentName: FieldRef<"batch_2023_24", 'String'>
    readonly RollNoSem1: FieldRef<"batch_2023_24", 'String'>
    readonly AdmissionApplicationNo: FieldRef<"batch_2023_24", 'String'>
    readonly Altmail: FieldRef<"batch_2023_24", 'String'>
    readonly FNum: FieldRef<"batch_2023_24", 'String'>
    readonly Gender: FieldRef<"batch_2023_24", 'String'>
    readonly MNum: FieldRef<"batch_2023_24", 'String'>
    readonly PhNum1: FieldRef<"batch_2023_24", 'String'>
    readonly PhNum2: FieldRef<"batch_2023_24", 'String'>
    readonly RollNoSem5: FieldRef<"batch_2023_24", 'Int'>
    readonly aadhaar_number: FieldRef<"batch_2023_24", 'String'>
    readonly abc_id: FieldRef<"batch_2023_24", 'String'>
    readonly dob: FieldRef<"batch_2023_24", 'String'>
    readonly mail: FieldRef<"batch_2023_24", 'String'>
    readonly mobile_number_registered_with_aadhar: FieldRef<"batch_2023_24", 'String'>
    readonly RollNoSem4: FieldRef<"batch_2023_24", 'Int'>
    readonly RollNoSem2: FieldRef<"batch_2023_24", 'String'>
    readonly RollNoSem3: FieldRef<"batch_2023_24", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * batch_2023_24 findUnique
   */
  export type batch_2023_24FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which batch_2023_24 to fetch.
     */
    where: batch_2023_24WhereUniqueInput
  }

  /**
   * batch_2023_24 findUniqueOrThrow
   */
  export type batch_2023_24FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which batch_2023_24 to fetch.
     */
    where: batch_2023_24WhereUniqueInput
  }

  /**
   * batch_2023_24 findFirst
   */
  export type batch_2023_24FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which batch_2023_24 to fetch.
     */
    where?: batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2023_24s to fetch.
     */
    orderBy?: batch_2023_24OrderByWithRelationInput | batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batch_2023_24s.
     */
    cursor?: batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batch_2023_24s.
     */
    distinct?: Batch_2023_24ScalarFieldEnum | Batch_2023_24ScalarFieldEnum[]
  }

  /**
   * batch_2023_24 findFirstOrThrow
   */
  export type batch_2023_24FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which batch_2023_24 to fetch.
     */
    where?: batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2023_24s to fetch.
     */
    orderBy?: batch_2023_24OrderByWithRelationInput | batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batch_2023_24s.
     */
    cursor?: batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batch_2023_24s.
     */
    distinct?: Batch_2023_24ScalarFieldEnum | Batch_2023_24ScalarFieldEnum[]
  }

  /**
   * batch_2023_24 findMany
   */
  export type batch_2023_24FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which batch_2023_24s to fetch.
     */
    where?: batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batch_2023_24s to fetch.
     */
    orderBy?: batch_2023_24OrderByWithRelationInput | batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing batch_2023_24s.
     */
    cursor?: batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batch_2023_24s.
     */
    skip?: number
    distinct?: Batch_2023_24ScalarFieldEnum | Batch_2023_24ScalarFieldEnum[]
  }

  /**
   * batch_2023_24 create
   */
  export type batch_2023_24CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * The data needed to create a batch_2023_24.
     */
    data: XOR<batch_2023_24CreateInput, batch_2023_24UncheckedCreateInput>
  }

  /**
   * batch_2023_24 createMany
   */
  export type batch_2023_24CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many batch_2023_24s.
     */
    data: batch_2023_24CreateManyInput | batch_2023_24CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * batch_2023_24 createManyAndReturn
   */
  export type batch_2023_24CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * The data used to create many batch_2023_24s.
     */
    data: batch_2023_24CreateManyInput | batch_2023_24CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * batch_2023_24 update
   */
  export type batch_2023_24UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * The data needed to update a batch_2023_24.
     */
    data: XOR<batch_2023_24UpdateInput, batch_2023_24UncheckedUpdateInput>
    /**
     * Choose, which batch_2023_24 to update.
     */
    where: batch_2023_24WhereUniqueInput
  }

  /**
   * batch_2023_24 updateMany
   */
  export type batch_2023_24UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update batch_2023_24s.
     */
    data: XOR<batch_2023_24UpdateManyMutationInput, batch_2023_24UncheckedUpdateManyInput>
    /**
     * Filter which batch_2023_24s to update
     */
    where?: batch_2023_24WhereInput
    /**
     * Limit how many batch_2023_24s to update.
     */
    limit?: number
  }

  /**
   * batch_2023_24 updateManyAndReturn
   */
  export type batch_2023_24UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * The data used to update batch_2023_24s.
     */
    data: XOR<batch_2023_24UpdateManyMutationInput, batch_2023_24UncheckedUpdateManyInput>
    /**
     * Filter which batch_2023_24s to update
     */
    where?: batch_2023_24WhereInput
    /**
     * Limit how many batch_2023_24s to update.
     */
    limit?: number
  }

  /**
   * batch_2023_24 upsert
   */
  export type batch_2023_24UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * The filter to search for the batch_2023_24 to update in case it exists.
     */
    where: batch_2023_24WhereUniqueInput
    /**
     * In case the batch_2023_24 found by the `where` argument doesn't exist, create a new batch_2023_24 with this data.
     */
    create: XOR<batch_2023_24CreateInput, batch_2023_24UncheckedCreateInput>
    /**
     * In case the batch_2023_24 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<batch_2023_24UpdateInput, batch_2023_24UncheckedUpdateInput>
  }

  /**
   * batch_2023_24 delete
   */
  export type batch_2023_24DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter which batch_2023_24 to delete.
     */
    where: batch_2023_24WhereUniqueInput
  }

  /**
   * batch_2023_24 deleteMany
   */
  export type batch_2023_24DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batch_2023_24s to delete
     */
    where?: batch_2023_24WhereInput
    /**
     * Limit how many batch_2023_24s to delete.
     */
    limit?: number
  }

  /**
   * batch_2023_24 without action
   */
  export type batch_2023_24DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batch_2023_24
     */
    select?: batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the batch_2023_24
     */
    omit?: batch_2023_24Omit<ExtArgs> | null
  }


  /**
   * Model Tjpatel_batch_2023_24
   */

  export type AggregateTjpatel_batch_2023_24 = {
    _count: Tjpatel_batch_2023_24CountAggregateOutputType | null
    _avg: Tjpatel_batch_2023_24AvgAggregateOutputType | null
    _sum: Tjpatel_batch_2023_24SumAggregateOutputType | null
    _min: Tjpatel_batch_2023_24MinAggregateOutputType | null
    _max: Tjpatel_batch_2023_24MaxAggregateOutputType | null
  }

  export type Tjpatel_batch_2023_24AvgAggregateOutputType = {
    id: number | null
    SrNo: number | null
  }

  export type Tjpatel_batch_2023_24SumAggregateOutputType = {
    id: number | null
    SrNo: number | null
  }

  export type Tjpatel_batch_2023_24MinAggregateOutputType = {
    id: number | null
    SrNo: number | null
    ApplicantName: string | null
    ApplicationNo: string | null
    Gender: string | null
    Category: string | null
    Disability: string | null
    Minority: string | null
    Nationality: string | null
    PaymentByCollege: string | null
    PaymentByStudent: string | null
    EnrolmentNumber: string | null
    ProgramType: string | null
    Verification: string | null
    spid: string | null
  }

  export type Tjpatel_batch_2023_24MaxAggregateOutputType = {
    id: number | null
    SrNo: number | null
    ApplicantName: string | null
    ApplicationNo: string | null
    Gender: string | null
    Category: string | null
    Disability: string | null
    Minority: string | null
    Nationality: string | null
    PaymentByCollege: string | null
    PaymentByStudent: string | null
    EnrolmentNumber: string | null
    ProgramType: string | null
    Verification: string | null
    spid: string | null
  }

  export type Tjpatel_batch_2023_24CountAggregateOutputType = {
    id: number
    SrNo: number
    ApplicantName: number
    ApplicationNo: number
    Gender: number
    Category: number
    Disability: number
    Minority: number
    Nationality: number
    PaymentByCollege: number
    PaymentByStudent: number
    EnrolmentNumber: number
    ProgramType: number
    Verification: number
    spid: number
    _all: number
  }


  export type Tjpatel_batch_2023_24AvgAggregateInputType = {
    id?: true
    SrNo?: true
  }

  export type Tjpatel_batch_2023_24SumAggregateInputType = {
    id?: true
    SrNo?: true
  }

  export type Tjpatel_batch_2023_24MinAggregateInputType = {
    id?: true
    SrNo?: true
    ApplicantName?: true
    ApplicationNo?: true
    Gender?: true
    Category?: true
    Disability?: true
    Minority?: true
    Nationality?: true
    PaymentByCollege?: true
    PaymentByStudent?: true
    EnrolmentNumber?: true
    ProgramType?: true
    Verification?: true
    spid?: true
  }

  export type Tjpatel_batch_2023_24MaxAggregateInputType = {
    id?: true
    SrNo?: true
    ApplicantName?: true
    ApplicationNo?: true
    Gender?: true
    Category?: true
    Disability?: true
    Minority?: true
    Nationality?: true
    PaymentByCollege?: true
    PaymentByStudent?: true
    EnrolmentNumber?: true
    ProgramType?: true
    Verification?: true
    spid?: true
  }

  export type Tjpatel_batch_2023_24CountAggregateInputType = {
    id?: true
    SrNo?: true
    ApplicantName?: true
    ApplicationNo?: true
    Gender?: true
    Category?: true
    Disability?: true
    Minority?: true
    Nationality?: true
    PaymentByCollege?: true
    PaymentByStudent?: true
    EnrolmentNumber?: true
    ProgramType?: true
    Verification?: true
    spid?: true
    _all?: true
  }

  export type Tjpatel_batch_2023_24AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tjpatel_batch_2023_24 to aggregate.
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tjpatel_batch_2023_24s to fetch.
     */
    orderBy?: Tjpatel_batch_2023_24OrderByWithRelationInput | Tjpatel_batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tjpatel_batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tjpatel_batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tjpatel_batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tjpatel_batch_2023_24s
    **/
    _count?: true | Tjpatel_batch_2023_24CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tjpatel_batch_2023_24AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tjpatel_batch_2023_24SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tjpatel_batch_2023_24MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tjpatel_batch_2023_24MaxAggregateInputType
  }

  export type GetTjpatel_batch_2023_24AggregateType<T extends Tjpatel_batch_2023_24AggregateArgs> = {
        [P in keyof T & keyof AggregateTjpatel_batch_2023_24]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTjpatel_batch_2023_24[P]>
      : GetScalarType<T[P], AggregateTjpatel_batch_2023_24[P]>
  }




  export type Tjpatel_batch_2023_24GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tjpatel_batch_2023_24WhereInput
    orderBy?: Tjpatel_batch_2023_24OrderByWithAggregationInput | Tjpatel_batch_2023_24OrderByWithAggregationInput[]
    by: Tjpatel_batch_2023_24ScalarFieldEnum[] | Tjpatel_batch_2023_24ScalarFieldEnum
    having?: Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tjpatel_batch_2023_24CountAggregateInputType | true
    _avg?: Tjpatel_batch_2023_24AvgAggregateInputType
    _sum?: Tjpatel_batch_2023_24SumAggregateInputType
    _min?: Tjpatel_batch_2023_24MinAggregateInputType
    _max?: Tjpatel_batch_2023_24MaxAggregateInputType
  }

  export type Tjpatel_batch_2023_24GroupByOutputType = {
    id: number
    SrNo: number
    ApplicantName: string
    ApplicationNo: string
    Gender: string
    Category: string
    Disability: string
    Minority: string
    Nationality: string
    PaymentByCollege: string
    PaymentByStudent: string
    EnrolmentNumber: string
    ProgramType: string
    Verification: string
    spid: string
    _count: Tjpatel_batch_2023_24CountAggregateOutputType | null
    _avg: Tjpatel_batch_2023_24AvgAggregateOutputType | null
    _sum: Tjpatel_batch_2023_24SumAggregateOutputType | null
    _min: Tjpatel_batch_2023_24MinAggregateOutputType | null
    _max: Tjpatel_batch_2023_24MaxAggregateOutputType | null
  }

  type GetTjpatel_batch_2023_24GroupByPayload<T extends Tjpatel_batch_2023_24GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tjpatel_batch_2023_24GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tjpatel_batch_2023_24GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tjpatel_batch_2023_24GroupByOutputType[P]>
            : GetScalarType<T[P], Tjpatel_batch_2023_24GroupByOutputType[P]>
        }
      >
    >


  export type Tjpatel_batch_2023_24Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SrNo?: boolean
    ApplicantName?: boolean
    ApplicationNo?: boolean
    Gender?: boolean
    Category?: boolean
    Disability?: boolean
    Minority?: boolean
    Nationality?: boolean
    PaymentByCollege?: boolean
    PaymentByStudent?: boolean
    EnrolmentNumber?: boolean
    ProgramType?: boolean
    Verification?: boolean
    spid?: boolean
  }, ExtArgs["result"]["tjpatel_batch_2023_24"]>

  export type Tjpatel_batch_2023_24SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SrNo?: boolean
    ApplicantName?: boolean
    ApplicationNo?: boolean
    Gender?: boolean
    Category?: boolean
    Disability?: boolean
    Minority?: boolean
    Nationality?: boolean
    PaymentByCollege?: boolean
    PaymentByStudent?: boolean
    EnrolmentNumber?: boolean
    ProgramType?: boolean
    Verification?: boolean
    spid?: boolean
  }, ExtArgs["result"]["tjpatel_batch_2023_24"]>

  export type Tjpatel_batch_2023_24SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SrNo?: boolean
    ApplicantName?: boolean
    ApplicationNo?: boolean
    Gender?: boolean
    Category?: boolean
    Disability?: boolean
    Minority?: boolean
    Nationality?: boolean
    PaymentByCollege?: boolean
    PaymentByStudent?: boolean
    EnrolmentNumber?: boolean
    ProgramType?: boolean
    Verification?: boolean
    spid?: boolean
  }, ExtArgs["result"]["tjpatel_batch_2023_24"]>

  export type Tjpatel_batch_2023_24SelectScalar = {
    id?: boolean
    SrNo?: boolean
    ApplicantName?: boolean
    ApplicationNo?: boolean
    Gender?: boolean
    Category?: boolean
    Disability?: boolean
    Minority?: boolean
    Nationality?: boolean
    PaymentByCollege?: boolean
    PaymentByStudent?: boolean
    EnrolmentNumber?: boolean
    ProgramType?: boolean
    Verification?: boolean
    spid?: boolean
  }

  export type Tjpatel_batch_2023_24Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SrNo" | "ApplicantName" | "ApplicationNo" | "Gender" | "Category" | "Disability" | "Minority" | "Nationality" | "PaymentByCollege" | "PaymentByStudent" | "EnrolmentNumber" | "ProgramType" | "Verification" | "spid", ExtArgs["result"]["tjpatel_batch_2023_24"]>

  export type $Tjpatel_batch_2023_24Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tjpatel_batch_2023_24"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SrNo: number
      ApplicantName: string
      ApplicationNo: string
      Gender: string
      Category: string
      Disability: string
      Minority: string
      Nationality: string
      PaymentByCollege: string
      PaymentByStudent: string
      EnrolmentNumber: string
      ProgramType: string
      Verification: string
      spid: string
    }, ExtArgs["result"]["tjpatel_batch_2023_24"]>
    composites: {}
  }

  type Tjpatel_batch_2023_24GetPayload<S extends boolean | null | undefined | Tjpatel_batch_2023_24DefaultArgs> = $Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload, S>

  type Tjpatel_batch_2023_24CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tjpatel_batch_2023_24FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tjpatel_batch_2023_24CountAggregateInputType | true
    }

  export interface Tjpatel_batch_2023_24Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tjpatel_batch_2023_24'], meta: { name: 'Tjpatel_batch_2023_24' } }
    /**
     * Find zero or one Tjpatel_batch_2023_24 that matches the filter.
     * @param {Tjpatel_batch_2023_24FindUniqueArgs} args - Arguments to find a Tjpatel_batch_2023_24
     * @example
     * // Get one Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tjpatel_batch_2023_24FindUniqueArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24FindUniqueArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tjpatel_batch_2023_24 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tjpatel_batch_2023_24FindUniqueOrThrowArgs} args - Arguments to find a Tjpatel_batch_2023_24
     * @example
     * // Get one Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tjpatel_batch_2023_24FindUniqueOrThrowArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tjpatel_batch_2023_24 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24FindFirstArgs} args - Arguments to find a Tjpatel_batch_2023_24
     * @example
     * // Get one Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tjpatel_batch_2023_24FindFirstArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24FindFirstArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tjpatel_batch_2023_24 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24FindFirstOrThrowArgs} args - Arguments to find a Tjpatel_batch_2023_24
     * @example
     * // Get one Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tjpatel_batch_2023_24FindFirstOrThrowArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24FindFirstOrThrowArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tjpatel_batch_2023_24s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24s = await prisma.tjpatel_batch_2023_24.findMany()
     * 
     * // Get first 10 Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24s = await prisma.tjpatel_batch_2023_24.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tjpatel_batch_2023_24WithIdOnly = await prisma.tjpatel_batch_2023_24.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tjpatel_batch_2023_24FindManyArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tjpatel_batch_2023_24.
     * @param {Tjpatel_batch_2023_24CreateArgs} args - Arguments to create a Tjpatel_batch_2023_24.
     * @example
     * // Create one Tjpatel_batch_2023_24
     * const Tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.create({
     *   data: {
     *     // ... data to create a Tjpatel_batch_2023_24
     *   }
     * })
     * 
     */
    create<T extends Tjpatel_batch_2023_24CreateArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24CreateArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tjpatel_batch_2023_24s.
     * @param {Tjpatel_batch_2023_24CreateManyArgs} args - Arguments to create many Tjpatel_batch_2023_24s.
     * @example
     * // Create many Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tjpatel_batch_2023_24CreateManyArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tjpatel_batch_2023_24s and returns the data saved in the database.
     * @param {Tjpatel_batch_2023_24CreateManyAndReturnArgs} args - Arguments to create many Tjpatel_batch_2023_24s.
     * @example
     * // Create many Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tjpatel_batch_2023_24s and only return the `id`
     * const tjpatel_batch_2023_24WithIdOnly = await prisma.tjpatel_batch_2023_24.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tjpatel_batch_2023_24CreateManyAndReturnArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tjpatel_batch_2023_24.
     * @param {Tjpatel_batch_2023_24DeleteArgs} args - Arguments to delete one Tjpatel_batch_2023_24.
     * @example
     * // Delete one Tjpatel_batch_2023_24
     * const Tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.delete({
     *   where: {
     *     // ... filter to delete one Tjpatel_batch_2023_24
     *   }
     * })
     * 
     */
    delete<T extends Tjpatel_batch_2023_24DeleteArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24DeleteArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tjpatel_batch_2023_24.
     * @param {Tjpatel_batch_2023_24UpdateArgs} args - Arguments to update one Tjpatel_batch_2023_24.
     * @example
     * // Update one Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tjpatel_batch_2023_24UpdateArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24UpdateArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tjpatel_batch_2023_24s.
     * @param {Tjpatel_batch_2023_24DeleteManyArgs} args - Arguments to filter Tjpatel_batch_2023_24s to delete.
     * @example
     * // Delete a few Tjpatel_batch_2023_24s
     * const { count } = await prisma.tjpatel_batch_2023_24.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tjpatel_batch_2023_24DeleteManyArgs>(args?: SelectSubset<T, Tjpatel_batch_2023_24DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tjpatel_batch_2023_24s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tjpatel_batch_2023_24UpdateManyArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tjpatel_batch_2023_24s and returns the data updated in the database.
     * @param {Tjpatel_batch_2023_24UpdateManyAndReturnArgs} args - Arguments to update many Tjpatel_batch_2023_24s.
     * @example
     * // Update many Tjpatel_batch_2023_24s
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tjpatel_batch_2023_24s and only return the `id`
     * const tjpatel_batch_2023_24WithIdOnly = await prisma.tjpatel_batch_2023_24.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Tjpatel_batch_2023_24UpdateManyAndReturnArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tjpatel_batch_2023_24.
     * @param {Tjpatel_batch_2023_24UpsertArgs} args - Arguments to update or create a Tjpatel_batch_2023_24.
     * @example
     * // Update or create a Tjpatel_batch_2023_24
     * const tjpatel_batch_2023_24 = await prisma.tjpatel_batch_2023_24.upsert({
     *   create: {
     *     // ... data to create a Tjpatel_batch_2023_24
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tjpatel_batch_2023_24 we want to update
     *   }
     * })
     */
    upsert<T extends Tjpatel_batch_2023_24UpsertArgs>(args: SelectSubset<T, Tjpatel_batch_2023_24UpsertArgs<ExtArgs>>): Prisma__Tjpatel_batch_2023_24Client<$Result.GetResult<Prisma.$Tjpatel_batch_2023_24Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tjpatel_batch_2023_24s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24CountArgs} args - Arguments to filter Tjpatel_batch_2023_24s to count.
     * @example
     * // Count the number of Tjpatel_batch_2023_24s
     * const count = await prisma.tjpatel_batch_2023_24.count({
     *   where: {
     *     // ... the filter for the Tjpatel_batch_2023_24s we want to count
     *   }
     * })
    **/
    count<T extends Tjpatel_batch_2023_24CountArgs>(
      args?: Subset<T, Tjpatel_batch_2023_24CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tjpatel_batch_2023_24CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tjpatel_batch_2023_24.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tjpatel_batch_2023_24AggregateArgs>(args: Subset<T, Tjpatel_batch_2023_24AggregateArgs>): Prisma.PrismaPromise<GetTjpatel_batch_2023_24AggregateType<T>>

    /**
     * Group by Tjpatel_batch_2023_24.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tjpatel_batch_2023_24GroupByArgs} args - Group by arguments.
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
      T extends Tjpatel_batch_2023_24GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tjpatel_batch_2023_24GroupByArgs['orderBy'] }
        : { orderBy?: Tjpatel_batch_2023_24GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tjpatel_batch_2023_24GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTjpatel_batch_2023_24GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tjpatel_batch_2023_24 model
   */
  readonly fields: Tjpatel_batch_2023_24FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tjpatel_batch_2023_24.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tjpatel_batch_2023_24Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Tjpatel_batch_2023_24 model
   */
  interface Tjpatel_batch_2023_24FieldRefs {
    readonly id: FieldRef<"Tjpatel_batch_2023_24", 'Int'>
    readonly SrNo: FieldRef<"Tjpatel_batch_2023_24", 'Int'>
    readonly ApplicantName: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly ApplicationNo: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Gender: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Category: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Disability: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Minority: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Nationality: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly PaymentByCollege: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly PaymentByStudent: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly EnrolmentNumber: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly ProgramType: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly Verification: FieldRef<"Tjpatel_batch_2023_24", 'String'>
    readonly spid: FieldRef<"Tjpatel_batch_2023_24", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tjpatel_batch_2023_24 findUnique
   */
  export type Tjpatel_batch_2023_24FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which Tjpatel_batch_2023_24 to fetch.
     */
    where: Tjpatel_batch_2023_24WhereUniqueInput
  }

  /**
   * Tjpatel_batch_2023_24 findUniqueOrThrow
   */
  export type Tjpatel_batch_2023_24FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which Tjpatel_batch_2023_24 to fetch.
     */
    where: Tjpatel_batch_2023_24WhereUniqueInput
  }

  /**
   * Tjpatel_batch_2023_24 findFirst
   */
  export type Tjpatel_batch_2023_24FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which Tjpatel_batch_2023_24 to fetch.
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tjpatel_batch_2023_24s to fetch.
     */
    orderBy?: Tjpatel_batch_2023_24OrderByWithRelationInput | Tjpatel_batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tjpatel_batch_2023_24s.
     */
    cursor?: Tjpatel_batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tjpatel_batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tjpatel_batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tjpatel_batch_2023_24s.
     */
    distinct?: Tjpatel_batch_2023_24ScalarFieldEnum | Tjpatel_batch_2023_24ScalarFieldEnum[]
  }

  /**
   * Tjpatel_batch_2023_24 findFirstOrThrow
   */
  export type Tjpatel_batch_2023_24FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which Tjpatel_batch_2023_24 to fetch.
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tjpatel_batch_2023_24s to fetch.
     */
    orderBy?: Tjpatel_batch_2023_24OrderByWithRelationInput | Tjpatel_batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tjpatel_batch_2023_24s.
     */
    cursor?: Tjpatel_batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tjpatel_batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tjpatel_batch_2023_24s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tjpatel_batch_2023_24s.
     */
    distinct?: Tjpatel_batch_2023_24ScalarFieldEnum | Tjpatel_batch_2023_24ScalarFieldEnum[]
  }

  /**
   * Tjpatel_batch_2023_24 findMany
   */
  export type Tjpatel_batch_2023_24FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter, which Tjpatel_batch_2023_24s to fetch.
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tjpatel_batch_2023_24s to fetch.
     */
    orderBy?: Tjpatel_batch_2023_24OrderByWithRelationInput | Tjpatel_batch_2023_24OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tjpatel_batch_2023_24s.
     */
    cursor?: Tjpatel_batch_2023_24WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tjpatel_batch_2023_24s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tjpatel_batch_2023_24s.
     */
    skip?: number
    distinct?: Tjpatel_batch_2023_24ScalarFieldEnum | Tjpatel_batch_2023_24ScalarFieldEnum[]
  }

  /**
   * Tjpatel_batch_2023_24 create
   */
  export type Tjpatel_batch_2023_24CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * The data needed to create a Tjpatel_batch_2023_24.
     */
    data: XOR<Tjpatel_batch_2023_24CreateInput, Tjpatel_batch_2023_24UncheckedCreateInput>
  }

  /**
   * Tjpatel_batch_2023_24 createMany
   */
  export type Tjpatel_batch_2023_24CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tjpatel_batch_2023_24s.
     */
    data: Tjpatel_batch_2023_24CreateManyInput | Tjpatel_batch_2023_24CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tjpatel_batch_2023_24 createManyAndReturn
   */
  export type Tjpatel_batch_2023_24CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * The data used to create many Tjpatel_batch_2023_24s.
     */
    data: Tjpatel_batch_2023_24CreateManyInput | Tjpatel_batch_2023_24CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tjpatel_batch_2023_24 update
   */
  export type Tjpatel_batch_2023_24UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * The data needed to update a Tjpatel_batch_2023_24.
     */
    data: XOR<Tjpatel_batch_2023_24UpdateInput, Tjpatel_batch_2023_24UncheckedUpdateInput>
    /**
     * Choose, which Tjpatel_batch_2023_24 to update.
     */
    where: Tjpatel_batch_2023_24WhereUniqueInput
  }

  /**
   * Tjpatel_batch_2023_24 updateMany
   */
  export type Tjpatel_batch_2023_24UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tjpatel_batch_2023_24s.
     */
    data: XOR<Tjpatel_batch_2023_24UpdateManyMutationInput, Tjpatel_batch_2023_24UncheckedUpdateManyInput>
    /**
     * Filter which Tjpatel_batch_2023_24s to update
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * Limit how many Tjpatel_batch_2023_24s to update.
     */
    limit?: number
  }

  /**
   * Tjpatel_batch_2023_24 updateManyAndReturn
   */
  export type Tjpatel_batch_2023_24UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * The data used to update Tjpatel_batch_2023_24s.
     */
    data: XOR<Tjpatel_batch_2023_24UpdateManyMutationInput, Tjpatel_batch_2023_24UncheckedUpdateManyInput>
    /**
     * Filter which Tjpatel_batch_2023_24s to update
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * Limit how many Tjpatel_batch_2023_24s to update.
     */
    limit?: number
  }

  /**
   * Tjpatel_batch_2023_24 upsert
   */
  export type Tjpatel_batch_2023_24UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * The filter to search for the Tjpatel_batch_2023_24 to update in case it exists.
     */
    where: Tjpatel_batch_2023_24WhereUniqueInput
    /**
     * In case the Tjpatel_batch_2023_24 found by the `where` argument doesn't exist, create a new Tjpatel_batch_2023_24 with this data.
     */
    create: XOR<Tjpatel_batch_2023_24CreateInput, Tjpatel_batch_2023_24UncheckedCreateInput>
    /**
     * In case the Tjpatel_batch_2023_24 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tjpatel_batch_2023_24UpdateInput, Tjpatel_batch_2023_24UncheckedUpdateInput>
  }

  /**
   * Tjpatel_batch_2023_24 delete
   */
  export type Tjpatel_batch_2023_24DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
    /**
     * Filter which Tjpatel_batch_2023_24 to delete.
     */
    where: Tjpatel_batch_2023_24WhereUniqueInput
  }

  /**
   * Tjpatel_batch_2023_24 deleteMany
   */
  export type Tjpatel_batch_2023_24DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tjpatel_batch_2023_24s to delete
     */
    where?: Tjpatel_batch_2023_24WhereInput
    /**
     * Limit how many Tjpatel_batch_2023_24s to delete.
     */
    limit?: number
  }

  /**
   * Tjpatel_batch_2023_24 without action
   */
  export type Tjpatel_batch_2023_24DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tjpatel_batch_2023_24
     */
    select?: Tjpatel_batch_2023_24Select<ExtArgs> | null
    /**
     * Omit specific fields from the Tjpatel_batch_2023_24
     */
    omit?: Tjpatel_batch_2023_24Omit<ExtArgs> | null
  }


  /**
   * Model charusat
   */

  export type AggregateCharusat = {
    _count: CharusatCountAggregateOutputType | null
    _avg: CharusatAvgAggregateOutputType | null
    _sum: CharusatSumAggregateOutputType | null
    _min: CharusatMinAggregateOutputType | null
    _max: CharusatMaxAggregateOutputType | null
  }

  export type CharusatAvgAggregateOutputType = {
    id: number | null
    roll_no: number | null
    first_sem_sgpa: number | null
    first_sem_backlogs: number | null
    second_sem_sgpa: number | null
    second_sem_backlogs: number | null
    first_sem_cgpa: number | null
  }

  export type CharusatSumAggregateOutputType = {
    id: number | null
    roll_no: number | null
    first_sem_sgpa: number | null
    first_sem_backlogs: number | null
    second_sem_sgpa: number | null
    second_sem_backlogs: number | null
    first_sem_cgpa: number | null
  }

  export type CharusatMinAggregateOutputType = {
    id: number | null
    roll_no: number | null
    id_no: string | null
    name: string | null
    first_sem_sgpa: number | null
    first_sem_backlogs: number | null
    second_sem_sgpa: number | null
    second_sem_backlogs: number | null
    first_sem_cgpa: number | null
  }

  export type CharusatMaxAggregateOutputType = {
    id: number | null
    roll_no: number | null
    id_no: string | null
    name: string | null
    first_sem_sgpa: number | null
    first_sem_backlogs: number | null
    second_sem_sgpa: number | null
    second_sem_backlogs: number | null
    first_sem_cgpa: number | null
  }

  export type CharusatCountAggregateOutputType = {
    id: number
    roll_no: number
    id_no: number
    name: number
    first_sem_sgpa: number
    first_sem_backlogs: number
    second_sem_sgpa: number
    second_sem_backlogs: number
    first_sem_cgpa: number
    _all: number
  }


  export type CharusatAvgAggregateInputType = {
    id?: true
    roll_no?: true
    first_sem_sgpa?: true
    first_sem_backlogs?: true
    second_sem_sgpa?: true
    second_sem_backlogs?: true
    first_sem_cgpa?: true
  }

  export type CharusatSumAggregateInputType = {
    id?: true
    roll_no?: true
    first_sem_sgpa?: true
    first_sem_backlogs?: true
    second_sem_sgpa?: true
    second_sem_backlogs?: true
    first_sem_cgpa?: true
  }

  export type CharusatMinAggregateInputType = {
    id?: true
    roll_no?: true
    id_no?: true
    name?: true
    first_sem_sgpa?: true
    first_sem_backlogs?: true
    second_sem_sgpa?: true
    second_sem_backlogs?: true
    first_sem_cgpa?: true
  }

  export type CharusatMaxAggregateInputType = {
    id?: true
    roll_no?: true
    id_no?: true
    name?: true
    first_sem_sgpa?: true
    first_sem_backlogs?: true
    second_sem_sgpa?: true
    second_sem_backlogs?: true
    first_sem_cgpa?: true
  }

  export type CharusatCountAggregateInputType = {
    id?: true
    roll_no?: true
    id_no?: true
    name?: true
    first_sem_sgpa?: true
    first_sem_backlogs?: true
    second_sem_sgpa?: true
    second_sem_backlogs?: true
    first_sem_cgpa?: true
    _all?: true
  }

  export type CharusatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which charusat to aggregate.
     */
    where?: charusatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of charusats to fetch.
     */
    orderBy?: charusatOrderByWithRelationInput | charusatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: charusatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` charusats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` charusats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned charusats
    **/
    _count?: true | CharusatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharusatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharusatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharusatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharusatMaxAggregateInputType
  }

  export type GetCharusatAggregateType<T extends CharusatAggregateArgs> = {
        [P in keyof T & keyof AggregateCharusat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharusat[P]>
      : GetScalarType<T[P], AggregateCharusat[P]>
  }




  export type charusatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: charusatWhereInput
    orderBy?: charusatOrderByWithAggregationInput | charusatOrderByWithAggregationInput[]
    by: CharusatScalarFieldEnum[] | CharusatScalarFieldEnum
    having?: charusatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharusatCountAggregateInputType | true
    _avg?: CharusatAvgAggregateInputType
    _sum?: CharusatSumAggregateInputType
    _min?: CharusatMinAggregateInputType
    _max?: CharusatMaxAggregateInputType
  }

  export type CharusatGroupByOutputType = {
    id: number
    roll_no: number
    id_no: string
    name: string
    first_sem_sgpa: number
    first_sem_backlogs: number
    second_sem_sgpa: number
    second_sem_backlogs: number
    first_sem_cgpa: number
    _count: CharusatCountAggregateOutputType | null
    _avg: CharusatAvgAggregateOutputType | null
    _sum: CharusatSumAggregateOutputType | null
    _min: CharusatMinAggregateOutputType | null
    _max: CharusatMaxAggregateOutputType | null
  }

  type GetCharusatGroupByPayload<T extends charusatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharusatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharusatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharusatGroupByOutputType[P]>
            : GetScalarType<T[P], CharusatGroupByOutputType[P]>
        }
      >
    >


  export type charusatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roll_no?: boolean
    id_no?: boolean
    name?: boolean
    first_sem_sgpa?: boolean
    first_sem_backlogs?: boolean
    second_sem_sgpa?: boolean
    second_sem_backlogs?: boolean
    first_sem_cgpa?: boolean
  }, ExtArgs["result"]["charusat"]>

  export type charusatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roll_no?: boolean
    id_no?: boolean
    name?: boolean
    first_sem_sgpa?: boolean
    first_sem_backlogs?: boolean
    second_sem_sgpa?: boolean
    second_sem_backlogs?: boolean
    first_sem_cgpa?: boolean
  }, ExtArgs["result"]["charusat"]>

  export type charusatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roll_no?: boolean
    id_no?: boolean
    name?: boolean
    first_sem_sgpa?: boolean
    first_sem_backlogs?: boolean
    second_sem_sgpa?: boolean
    second_sem_backlogs?: boolean
    first_sem_cgpa?: boolean
  }, ExtArgs["result"]["charusat"]>

  export type charusatSelectScalar = {
    id?: boolean
    roll_no?: boolean
    id_no?: boolean
    name?: boolean
    first_sem_sgpa?: boolean
    first_sem_backlogs?: boolean
    second_sem_sgpa?: boolean
    second_sem_backlogs?: boolean
    first_sem_cgpa?: boolean
  }

  export type charusatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roll_no" | "id_no" | "name" | "first_sem_sgpa" | "first_sem_backlogs" | "second_sem_sgpa" | "second_sem_backlogs" | "first_sem_cgpa", ExtArgs["result"]["charusat"]>

  export type $charusatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "charusat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roll_no: number
      id_no: string
      name: string
      first_sem_sgpa: number
      first_sem_backlogs: number
      second_sem_sgpa: number
      second_sem_backlogs: number
      first_sem_cgpa: number
    }, ExtArgs["result"]["charusat"]>
    composites: {}
  }

  type charusatGetPayload<S extends boolean | null | undefined | charusatDefaultArgs> = $Result.GetResult<Prisma.$charusatPayload, S>

  type charusatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<charusatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharusatCountAggregateInputType | true
    }

  export interface charusatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['charusat'], meta: { name: 'charusat' } }
    /**
     * Find zero or one Charusat that matches the filter.
     * @param {charusatFindUniqueArgs} args - Arguments to find a Charusat
     * @example
     * // Get one Charusat
     * const charusat = await prisma.charusat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends charusatFindUniqueArgs>(args: SelectSubset<T, charusatFindUniqueArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charusat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {charusatFindUniqueOrThrowArgs} args - Arguments to find a Charusat
     * @example
     * // Get one Charusat
     * const charusat = await prisma.charusat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends charusatFindUniqueOrThrowArgs>(args: SelectSubset<T, charusatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charusat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatFindFirstArgs} args - Arguments to find a Charusat
     * @example
     * // Get one Charusat
     * const charusat = await prisma.charusat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends charusatFindFirstArgs>(args?: SelectSubset<T, charusatFindFirstArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charusat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatFindFirstOrThrowArgs} args - Arguments to find a Charusat
     * @example
     * // Get one Charusat
     * const charusat = await prisma.charusat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends charusatFindFirstOrThrowArgs>(args?: SelectSubset<T, charusatFindFirstOrThrowArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charusats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charusats
     * const charusats = await prisma.charusat.findMany()
     * 
     * // Get first 10 Charusats
     * const charusats = await prisma.charusat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charusatWithIdOnly = await prisma.charusat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends charusatFindManyArgs>(args?: SelectSubset<T, charusatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charusat.
     * @param {charusatCreateArgs} args - Arguments to create a Charusat.
     * @example
     * // Create one Charusat
     * const Charusat = await prisma.charusat.create({
     *   data: {
     *     // ... data to create a Charusat
     *   }
     * })
     * 
     */
    create<T extends charusatCreateArgs>(args: SelectSubset<T, charusatCreateArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charusats.
     * @param {charusatCreateManyArgs} args - Arguments to create many Charusats.
     * @example
     * // Create many Charusats
     * const charusat = await prisma.charusat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends charusatCreateManyArgs>(args?: SelectSubset<T, charusatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charusats and returns the data saved in the database.
     * @param {charusatCreateManyAndReturnArgs} args - Arguments to create many Charusats.
     * @example
     * // Create many Charusats
     * const charusat = await prisma.charusat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charusats and only return the `id`
     * const charusatWithIdOnly = await prisma.charusat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends charusatCreateManyAndReturnArgs>(args?: SelectSubset<T, charusatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charusat.
     * @param {charusatDeleteArgs} args - Arguments to delete one Charusat.
     * @example
     * // Delete one Charusat
     * const Charusat = await prisma.charusat.delete({
     *   where: {
     *     // ... filter to delete one Charusat
     *   }
     * })
     * 
     */
    delete<T extends charusatDeleteArgs>(args: SelectSubset<T, charusatDeleteArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charusat.
     * @param {charusatUpdateArgs} args - Arguments to update one Charusat.
     * @example
     * // Update one Charusat
     * const charusat = await prisma.charusat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends charusatUpdateArgs>(args: SelectSubset<T, charusatUpdateArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charusats.
     * @param {charusatDeleteManyArgs} args - Arguments to filter Charusats to delete.
     * @example
     * // Delete a few Charusats
     * const { count } = await prisma.charusat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends charusatDeleteManyArgs>(args?: SelectSubset<T, charusatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charusats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charusats
     * const charusat = await prisma.charusat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends charusatUpdateManyArgs>(args: SelectSubset<T, charusatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charusats and returns the data updated in the database.
     * @param {charusatUpdateManyAndReturnArgs} args - Arguments to update many Charusats.
     * @example
     * // Update many Charusats
     * const charusat = await prisma.charusat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charusats and only return the `id`
     * const charusatWithIdOnly = await prisma.charusat.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends charusatUpdateManyAndReturnArgs>(args: SelectSubset<T, charusatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charusat.
     * @param {charusatUpsertArgs} args - Arguments to update or create a Charusat.
     * @example
     * // Update or create a Charusat
     * const charusat = await prisma.charusat.upsert({
     *   create: {
     *     // ... data to create a Charusat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charusat we want to update
     *   }
     * })
     */
    upsert<T extends charusatUpsertArgs>(args: SelectSubset<T, charusatUpsertArgs<ExtArgs>>): Prisma__charusatClient<$Result.GetResult<Prisma.$charusatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charusats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatCountArgs} args - Arguments to filter Charusats to count.
     * @example
     * // Count the number of Charusats
     * const count = await prisma.charusat.count({
     *   where: {
     *     // ... the filter for the Charusats we want to count
     *   }
     * })
    **/
    count<T extends charusatCountArgs>(
      args?: Subset<T, charusatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharusatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charusat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharusatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharusatAggregateArgs>(args: Subset<T, CharusatAggregateArgs>): Prisma.PrismaPromise<GetCharusatAggregateType<T>>

    /**
     * Group by Charusat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {charusatGroupByArgs} args - Group by arguments.
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
      T extends charusatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: charusatGroupByArgs['orderBy'] }
        : { orderBy?: charusatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, charusatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharusatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the charusat model
   */
  readonly fields: charusatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for charusat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__charusatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the charusat model
   */
  interface charusatFieldRefs {
    readonly id: FieldRef<"charusat", 'Int'>
    readonly roll_no: FieldRef<"charusat", 'Int'>
    readonly id_no: FieldRef<"charusat", 'String'>
    readonly name: FieldRef<"charusat", 'String'>
    readonly first_sem_sgpa: FieldRef<"charusat", 'Float'>
    readonly first_sem_backlogs: FieldRef<"charusat", 'Int'>
    readonly second_sem_sgpa: FieldRef<"charusat", 'Float'>
    readonly second_sem_backlogs: FieldRef<"charusat", 'Int'>
    readonly first_sem_cgpa: FieldRef<"charusat", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * charusat findUnique
   */
  export type charusatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter, which charusat to fetch.
     */
    where: charusatWhereUniqueInput
  }

  /**
   * charusat findUniqueOrThrow
   */
  export type charusatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter, which charusat to fetch.
     */
    where: charusatWhereUniqueInput
  }

  /**
   * charusat findFirst
   */
  export type charusatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter, which charusat to fetch.
     */
    where?: charusatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of charusats to fetch.
     */
    orderBy?: charusatOrderByWithRelationInput | charusatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for charusats.
     */
    cursor?: charusatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` charusats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` charusats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of charusats.
     */
    distinct?: CharusatScalarFieldEnum | CharusatScalarFieldEnum[]
  }

  /**
   * charusat findFirstOrThrow
   */
  export type charusatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter, which charusat to fetch.
     */
    where?: charusatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of charusats to fetch.
     */
    orderBy?: charusatOrderByWithRelationInput | charusatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for charusats.
     */
    cursor?: charusatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` charusats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` charusats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of charusats.
     */
    distinct?: CharusatScalarFieldEnum | CharusatScalarFieldEnum[]
  }

  /**
   * charusat findMany
   */
  export type charusatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter, which charusats to fetch.
     */
    where?: charusatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of charusats to fetch.
     */
    orderBy?: charusatOrderByWithRelationInput | charusatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing charusats.
     */
    cursor?: charusatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` charusats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` charusats.
     */
    skip?: number
    distinct?: CharusatScalarFieldEnum | CharusatScalarFieldEnum[]
  }

  /**
   * charusat create
   */
  export type charusatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * The data needed to create a charusat.
     */
    data: XOR<charusatCreateInput, charusatUncheckedCreateInput>
  }

  /**
   * charusat createMany
   */
  export type charusatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many charusats.
     */
    data: charusatCreateManyInput | charusatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * charusat createManyAndReturn
   */
  export type charusatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * The data used to create many charusats.
     */
    data: charusatCreateManyInput | charusatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * charusat update
   */
  export type charusatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * The data needed to update a charusat.
     */
    data: XOR<charusatUpdateInput, charusatUncheckedUpdateInput>
    /**
     * Choose, which charusat to update.
     */
    where: charusatWhereUniqueInput
  }

  /**
   * charusat updateMany
   */
  export type charusatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update charusats.
     */
    data: XOR<charusatUpdateManyMutationInput, charusatUncheckedUpdateManyInput>
    /**
     * Filter which charusats to update
     */
    where?: charusatWhereInput
    /**
     * Limit how many charusats to update.
     */
    limit?: number
  }

  /**
   * charusat updateManyAndReturn
   */
  export type charusatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * The data used to update charusats.
     */
    data: XOR<charusatUpdateManyMutationInput, charusatUncheckedUpdateManyInput>
    /**
     * Filter which charusats to update
     */
    where?: charusatWhereInput
    /**
     * Limit how many charusats to update.
     */
    limit?: number
  }

  /**
   * charusat upsert
   */
  export type charusatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * The filter to search for the charusat to update in case it exists.
     */
    where: charusatWhereUniqueInput
    /**
     * In case the charusat found by the `where` argument doesn't exist, create a new charusat with this data.
     */
    create: XOR<charusatCreateInput, charusatUncheckedCreateInput>
    /**
     * In case the charusat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<charusatUpdateInput, charusatUncheckedUpdateInput>
  }

  /**
   * charusat delete
   */
  export type charusatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
    /**
     * Filter which charusat to delete.
     */
    where: charusatWhereUniqueInput
  }

  /**
   * charusat deleteMany
   */
  export type charusatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which charusats to delete
     */
    where?: charusatWhereInput
    /**
     * Limit how many charusats to delete.
     */
    limit?: number
  }

  /**
   * charusat without action
   */
  export type charusatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the charusat
     */
    select?: charusatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the charusat
     */
    omit?: charusatOmit<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Sem5ScalarFieldEnum: {
    id: 'id',
    RollNo: 'RollNo',
    EnrollmentNo: 'EnrollmentNo',
    StudentName: 'StudentName',
    LabBatchNo: 'LabBatchNo',
    sem: 'sem',
    AdmissionApplicationNo: 'AdmissionApplicationNo',
    Altmail: 'Altmail',
    FNum: 'FNum',
    Gender: 'Gender',
    MNum: 'MNum',
    PhNum1: 'PhNum1',
    PhNum2: 'PhNum2',
    mail: 'mail',
    aadhaar_number: 'aadhaar_number',
    abc_id: 'abc_id',
    dob: 'dob',
    mobile_number_registered_with_aadhar: 'mobile_number_registered_with_aadhar'
  };

  export type Sem5ScalarFieldEnum = (typeof Sem5ScalarFieldEnum)[keyof typeof Sem5ScalarFieldEnum]


  export const Sem4ScalarFieldEnum: {
    id: 'id',
    RollNo: 'RollNo',
    EnrollmentNo: 'EnrollmentNo',
    StudentName: 'StudentName',
    LabBatchNo: 'LabBatchNo'
  };

  export type Sem4ScalarFieldEnum = (typeof Sem4ScalarFieldEnum)[keyof typeof Sem4ScalarFieldEnum]


  export const Batch_2024_25ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    pincode: 'pincode',
    student_mobile: 'student_mobile',
    parent_mobile: 'parent_mobile',
    email: 'email',
    birthdate: 'birthdate',
    gender: 'gender',
    aadhar_no: 'aadhar_no',
    religion: 'religion',
    cast: 'cast',
    stream: 'stream',
    tenth_percent: 'tenth_percent',
    twelfth_percent: 'twelfth_percent',
    admission_no: 'admission_no'
  };

  export type Batch_2024_25ScalarFieldEnum = (typeof Batch_2024_25ScalarFieldEnum)[keyof typeof Batch_2024_25ScalarFieldEnum]


  export const Batch_2023_24ScalarFieldEnum: {
    id: 'id',
    StudentId: 'StudentId',
    StudentName: 'StudentName',
    RollNoSem1: 'RollNoSem1',
    AdmissionApplicationNo: 'AdmissionApplicationNo',
    Altmail: 'Altmail',
    FNum: 'FNum',
    Gender: 'Gender',
    MNum: 'MNum',
    PhNum1: 'PhNum1',
    PhNum2: 'PhNum2',
    RollNoSem5: 'RollNoSem5',
    aadhaar_number: 'aadhaar_number',
    abc_id: 'abc_id',
    dob: 'dob',
    mail: 'mail',
    mobile_number_registered_with_aadhar: 'mobile_number_registered_with_aadhar',
    RollNoSem4: 'RollNoSem4',
    RollNoSem2: 'RollNoSem2',
    RollNoSem3: 'RollNoSem3'
  };

  export type Batch_2023_24ScalarFieldEnum = (typeof Batch_2023_24ScalarFieldEnum)[keyof typeof Batch_2023_24ScalarFieldEnum]


  export const Tjpatel_batch_2023_24ScalarFieldEnum: {
    id: 'id',
    SrNo: 'SrNo',
    ApplicantName: 'ApplicantName',
    ApplicationNo: 'ApplicationNo',
    Gender: 'Gender',
    Category: 'Category',
    Disability: 'Disability',
    Minority: 'Minority',
    Nationality: 'Nationality',
    PaymentByCollege: 'PaymentByCollege',
    PaymentByStudent: 'PaymentByStudent',
    EnrolmentNumber: 'EnrolmentNumber',
    ProgramType: 'ProgramType',
    Verification: 'Verification',
    spid: 'spid'
  };

  export type Tjpatel_batch_2023_24ScalarFieldEnum = (typeof Tjpatel_batch_2023_24ScalarFieldEnum)[keyof typeof Tjpatel_batch_2023_24ScalarFieldEnum]


  export const CharusatScalarFieldEnum: {
    id: 'id',
    roll_no: 'roll_no',
    id_no: 'id_no',
    name: 'name',
    first_sem_sgpa: 'first_sem_sgpa',
    first_sem_backlogs: 'first_sem_backlogs',
    second_sem_sgpa: 'second_sem_sgpa',
    second_sem_backlogs: 'second_sem_backlogs',
    first_sem_cgpa: 'first_sem_cgpa'
  };

  export type CharusatScalarFieldEnum = (typeof CharusatScalarFieldEnum)[keyof typeof CharusatScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type Sem5WhereInput = {
    AND?: Sem5WhereInput | Sem5WhereInput[]
    OR?: Sem5WhereInput[]
    NOT?: Sem5WhereInput | Sem5WhereInput[]
    id?: StringFilter<"Sem5"> | string
    RollNo?: IntFilter<"Sem5"> | number
    EnrollmentNo?: StringFilter<"Sem5"> | string
    StudentName?: StringFilter<"Sem5"> | string
    LabBatchNo?: StringFilter<"Sem5"> | string
    sem?: StringFilter<"Sem5"> | string
    AdmissionApplicationNo?: StringFilter<"Sem5"> | string
    Altmail?: StringFilter<"Sem5"> | string
    FNum?: StringFilter<"Sem5"> | string
    Gender?: StringFilter<"Sem5"> | string
    MNum?: StringFilter<"Sem5"> | string
    PhNum1?: StringFilter<"Sem5"> | string
    PhNum2?: StringFilter<"Sem5"> | string
    mail?: StringFilter<"Sem5"> | string
    aadhaar_number?: StringFilter<"Sem5"> | string
    abc_id?: StringFilter<"Sem5"> | string
    dob?: StringFilter<"Sem5"> | string
    mobile_number_registered_with_aadhar?: StringFilter<"Sem5"> | string
  }

  export type Sem5OrderByWithRelationInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    sem?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    mail?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
  }

  export type Sem5WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    EnrollmentNo?: string
    AdmissionApplicationNo?: string
    AND?: Sem5WhereInput | Sem5WhereInput[]
    OR?: Sem5WhereInput[]
    NOT?: Sem5WhereInput | Sem5WhereInput[]
    RollNo?: IntFilter<"Sem5"> | number
    StudentName?: StringFilter<"Sem5"> | string
    LabBatchNo?: StringFilter<"Sem5"> | string
    sem?: StringFilter<"Sem5"> | string
    Altmail?: StringFilter<"Sem5"> | string
    FNum?: StringFilter<"Sem5"> | string
    Gender?: StringFilter<"Sem5"> | string
    MNum?: StringFilter<"Sem5"> | string
    PhNum1?: StringFilter<"Sem5"> | string
    PhNum2?: StringFilter<"Sem5"> | string
    mail?: StringFilter<"Sem5"> | string
    aadhaar_number?: StringFilter<"Sem5"> | string
    abc_id?: StringFilter<"Sem5"> | string
    dob?: StringFilter<"Sem5"> | string
    mobile_number_registered_with_aadhar?: StringFilter<"Sem5"> | string
  }, "id" | "EnrollmentNo" | "AdmissionApplicationNo">

  export type Sem5OrderByWithAggregationInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    sem?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    mail?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    _count?: Sem5CountOrderByAggregateInput
    _avg?: Sem5AvgOrderByAggregateInput
    _max?: Sem5MaxOrderByAggregateInput
    _min?: Sem5MinOrderByAggregateInput
    _sum?: Sem5SumOrderByAggregateInput
  }

  export type Sem5ScalarWhereWithAggregatesInput = {
    AND?: Sem5ScalarWhereWithAggregatesInput | Sem5ScalarWhereWithAggregatesInput[]
    OR?: Sem5ScalarWhereWithAggregatesInput[]
    NOT?: Sem5ScalarWhereWithAggregatesInput | Sem5ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sem5"> | string
    RollNo?: IntWithAggregatesFilter<"Sem5"> | number
    EnrollmentNo?: StringWithAggregatesFilter<"Sem5"> | string
    StudentName?: StringWithAggregatesFilter<"Sem5"> | string
    LabBatchNo?: StringWithAggregatesFilter<"Sem5"> | string
    sem?: StringWithAggregatesFilter<"Sem5"> | string
    AdmissionApplicationNo?: StringWithAggregatesFilter<"Sem5"> | string
    Altmail?: StringWithAggregatesFilter<"Sem5"> | string
    FNum?: StringWithAggregatesFilter<"Sem5"> | string
    Gender?: StringWithAggregatesFilter<"Sem5"> | string
    MNum?: StringWithAggregatesFilter<"Sem5"> | string
    PhNum1?: StringWithAggregatesFilter<"Sem5"> | string
    PhNum2?: StringWithAggregatesFilter<"Sem5"> | string
    mail?: StringWithAggregatesFilter<"Sem5"> | string
    aadhaar_number?: StringWithAggregatesFilter<"Sem5"> | string
    abc_id?: StringWithAggregatesFilter<"Sem5"> | string
    dob?: StringWithAggregatesFilter<"Sem5"> | string
    mobile_number_registered_with_aadhar?: StringWithAggregatesFilter<"Sem5"> | string
  }

  export type Sem4WhereInput = {
    AND?: Sem4WhereInput | Sem4WhereInput[]
    OR?: Sem4WhereInput[]
    NOT?: Sem4WhereInput | Sem4WhereInput[]
    id?: IntFilter<"Sem4"> | number
    RollNo?: IntFilter<"Sem4"> | number
    EnrollmentNo?: StringFilter<"Sem4"> | string
    StudentName?: StringFilter<"Sem4"> | string
    LabBatchNo?: StringFilter<"Sem4"> | string
  }

  export type Sem4OrderByWithRelationInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
  }

  export type Sem4WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Sem4WhereInput | Sem4WhereInput[]
    OR?: Sem4WhereInput[]
    NOT?: Sem4WhereInput | Sem4WhereInput[]
    RollNo?: IntFilter<"Sem4"> | number
    EnrollmentNo?: StringFilter<"Sem4"> | string
    StudentName?: StringFilter<"Sem4"> | string
    LabBatchNo?: StringFilter<"Sem4"> | string
  }, "id">

  export type Sem4OrderByWithAggregationInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    _count?: Sem4CountOrderByAggregateInput
    _avg?: Sem4AvgOrderByAggregateInput
    _max?: Sem4MaxOrderByAggregateInput
    _min?: Sem4MinOrderByAggregateInput
    _sum?: Sem4SumOrderByAggregateInput
  }

  export type Sem4ScalarWhereWithAggregatesInput = {
    AND?: Sem4ScalarWhereWithAggregatesInput | Sem4ScalarWhereWithAggregatesInput[]
    OR?: Sem4ScalarWhereWithAggregatesInput[]
    NOT?: Sem4ScalarWhereWithAggregatesInput | Sem4ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sem4"> | number
    RollNo?: IntWithAggregatesFilter<"Sem4"> | number
    EnrollmentNo?: StringWithAggregatesFilter<"Sem4"> | string
    StudentName?: StringWithAggregatesFilter<"Sem4"> | string
    LabBatchNo?: StringWithAggregatesFilter<"Sem4"> | string
  }

  export type batch_2024_25WhereInput = {
    AND?: batch_2024_25WhereInput | batch_2024_25WhereInput[]
    OR?: batch_2024_25WhereInput[]
    NOT?: batch_2024_25WhereInput | batch_2024_25WhereInput[]
    id?: IntFilter<"batch_2024_25"> | number
    name?: StringFilter<"batch_2024_25"> | string
    address?: StringFilter<"batch_2024_25"> | string
    city?: StringFilter<"batch_2024_25"> | string
    pincode?: StringFilter<"batch_2024_25"> | string
    student_mobile?: StringFilter<"batch_2024_25"> | string
    parent_mobile?: StringFilter<"batch_2024_25"> | string
    email?: StringFilter<"batch_2024_25"> | string
    birthdate?: StringFilter<"batch_2024_25"> | string
    gender?: StringFilter<"batch_2024_25"> | string
    aadhar_no?: StringFilter<"batch_2024_25"> | string
    religion?: StringFilter<"batch_2024_25"> | string
    cast?: StringFilter<"batch_2024_25"> | string
    stream?: StringFilter<"batch_2024_25"> | string
    tenth_percent?: StringFilter<"batch_2024_25"> | string
    twelfth_percent?: StringFilter<"batch_2024_25"> | string
    admission_no?: IntFilter<"batch_2024_25"> | number
  }

  export type batch_2024_25OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    student_mobile?: SortOrder
    parent_mobile?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    aadhar_no?: SortOrder
    religion?: SortOrder
    cast?: SortOrder
    stream?: SortOrder
    tenth_percent?: SortOrder
    twelfth_percent?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2024_25WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: batch_2024_25WhereInput | batch_2024_25WhereInput[]
    OR?: batch_2024_25WhereInput[]
    NOT?: batch_2024_25WhereInput | batch_2024_25WhereInput[]
    name?: StringFilter<"batch_2024_25"> | string
    address?: StringFilter<"batch_2024_25"> | string
    city?: StringFilter<"batch_2024_25"> | string
    pincode?: StringFilter<"batch_2024_25"> | string
    student_mobile?: StringFilter<"batch_2024_25"> | string
    parent_mobile?: StringFilter<"batch_2024_25"> | string
    email?: StringFilter<"batch_2024_25"> | string
    birthdate?: StringFilter<"batch_2024_25"> | string
    gender?: StringFilter<"batch_2024_25"> | string
    aadhar_no?: StringFilter<"batch_2024_25"> | string
    religion?: StringFilter<"batch_2024_25"> | string
    cast?: StringFilter<"batch_2024_25"> | string
    stream?: StringFilter<"batch_2024_25"> | string
    tenth_percent?: StringFilter<"batch_2024_25"> | string
    twelfth_percent?: StringFilter<"batch_2024_25"> | string
    admission_no?: IntFilter<"batch_2024_25"> | number
  }, "id">

  export type batch_2024_25OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    student_mobile?: SortOrder
    parent_mobile?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    aadhar_no?: SortOrder
    religion?: SortOrder
    cast?: SortOrder
    stream?: SortOrder
    tenth_percent?: SortOrder
    twelfth_percent?: SortOrder
    admission_no?: SortOrder
    _count?: batch_2024_25CountOrderByAggregateInput
    _avg?: batch_2024_25AvgOrderByAggregateInput
    _max?: batch_2024_25MaxOrderByAggregateInput
    _min?: batch_2024_25MinOrderByAggregateInput
    _sum?: batch_2024_25SumOrderByAggregateInput
  }

  export type batch_2024_25ScalarWhereWithAggregatesInput = {
    AND?: batch_2024_25ScalarWhereWithAggregatesInput | batch_2024_25ScalarWhereWithAggregatesInput[]
    OR?: batch_2024_25ScalarWhereWithAggregatesInput[]
    NOT?: batch_2024_25ScalarWhereWithAggregatesInput | batch_2024_25ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"batch_2024_25"> | number
    name?: StringWithAggregatesFilter<"batch_2024_25"> | string
    address?: StringWithAggregatesFilter<"batch_2024_25"> | string
    city?: StringWithAggregatesFilter<"batch_2024_25"> | string
    pincode?: StringWithAggregatesFilter<"batch_2024_25"> | string
    student_mobile?: StringWithAggregatesFilter<"batch_2024_25"> | string
    parent_mobile?: StringWithAggregatesFilter<"batch_2024_25"> | string
    email?: StringWithAggregatesFilter<"batch_2024_25"> | string
    birthdate?: StringWithAggregatesFilter<"batch_2024_25"> | string
    gender?: StringWithAggregatesFilter<"batch_2024_25"> | string
    aadhar_no?: StringWithAggregatesFilter<"batch_2024_25"> | string
    religion?: StringWithAggregatesFilter<"batch_2024_25"> | string
    cast?: StringWithAggregatesFilter<"batch_2024_25"> | string
    stream?: StringWithAggregatesFilter<"batch_2024_25"> | string
    tenth_percent?: StringWithAggregatesFilter<"batch_2024_25"> | string
    twelfth_percent?: StringWithAggregatesFilter<"batch_2024_25"> | string
    admission_no?: IntWithAggregatesFilter<"batch_2024_25"> | number
  }

  export type batch_2023_24WhereInput = {
    AND?: batch_2023_24WhereInput | batch_2023_24WhereInput[]
    OR?: batch_2023_24WhereInput[]
    NOT?: batch_2023_24WhereInput | batch_2023_24WhereInput[]
    id?: IntFilter<"batch_2023_24"> | number
    StudentId?: StringFilter<"batch_2023_24"> | string
    StudentName?: StringFilter<"batch_2023_24"> | string
    RollNoSem1?: StringFilter<"batch_2023_24"> | string
    AdmissionApplicationNo?: StringFilter<"batch_2023_24"> | string
    Altmail?: StringFilter<"batch_2023_24"> | string
    FNum?: StringFilter<"batch_2023_24"> | string
    Gender?: StringFilter<"batch_2023_24"> | string
    MNum?: StringFilter<"batch_2023_24"> | string
    PhNum1?: StringFilter<"batch_2023_24"> | string
    PhNum2?: StringFilter<"batch_2023_24"> | string
    RollNoSem5?: IntFilter<"batch_2023_24"> | number
    aadhaar_number?: StringFilter<"batch_2023_24"> | string
    abc_id?: StringFilter<"batch_2023_24"> | string
    dob?: StringFilter<"batch_2023_24"> | string
    mail?: StringFilter<"batch_2023_24"> | string
    mobile_number_registered_with_aadhar?: StringFilter<"batch_2023_24"> | string
    RollNoSem4?: IntFilter<"batch_2023_24"> | number
    RollNoSem2?: StringFilter<"batch_2023_24"> | string
    RollNoSem3?: IntFilter<"batch_2023_24"> | number
  }

  export type batch_2023_24OrderByWithRelationInput = {
    id?: SortOrder
    StudentId?: SortOrder
    StudentName?: SortOrder
    RollNoSem1?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    RollNoSem5?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mail?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem2?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type batch_2023_24WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: batch_2023_24WhereInput | batch_2023_24WhereInput[]
    OR?: batch_2023_24WhereInput[]
    NOT?: batch_2023_24WhereInput | batch_2023_24WhereInput[]
    StudentId?: StringFilter<"batch_2023_24"> | string
    StudentName?: StringFilter<"batch_2023_24"> | string
    RollNoSem1?: StringFilter<"batch_2023_24"> | string
    AdmissionApplicationNo?: StringFilter<"batch_2023_24"> | string
    Altmail?: StringFilter<"batch_2023_24"> | string
    FNum?: StringFilter<"batch_2023_24"> | string
    Gender?: StringFilter<"batch_2023_24"> | string
    MNum?: StringFilter<"batch_2023_24"> | string
    PhNum1?: StringFilter<"batch_2023_24"> | string
    PhNum2?: StringFilter<"batch_2023_24"> | string
    RollNoSem5?: IntFilter<"batch_2023_24"> | number
    aadhaar_number?: StringFilter<"batch_2023_24"> | string
    abc_id?: StringFilter<"batch_2023_24"> | string
    dob?: StringFilter<"batch_2023_24"> | string
    mail?: StringFilter<"batch_2023_24"> | string
    mobile_number_registered_with_aadhar?: StringFilter<"batch_2023_24"> | string
    RollNoSem4?: IntFilter<"batch_2023_24"> | number
    RollNoSem2?: StringFilter<"batch_2023_24"> | string
    RollNoSem3?: IntFilter<"batch_2023_24"> | number
  }, "id">

  export type batch_2023_24OrderByWithAggregationInput = {
    id?: SortOrder
    StudentId?: SortOrder
    StudentName?: SortOrder
    RollNoSem1?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    RollNoSem5?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mail?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem2?: SortOrder
    RollNoSem3?: SortOrder
    _count?: batch_2023_24CountOrderByAggregateInput
    _avg?: batch_2023_24AvgOrderByAggregateInput
    _max?: batch_2023_24MaxOrderByAggregateInput
    _min?: batch_2023_24MinOrderByAggregateInput
    _sum?: batch_2023_24SumOrderByAggregateInput
  }

  export type batch_2023_24ScalarWhereWithAggregatesInput = {
    AND?: batch_2023_24ScalarWhereWithAggregatesInput | batch_2023_24ScalarWhereWithAggregatesInput[]
    OR?: batch_2023_24ScalarWhereWithAggregatesInput[]
    NOT?: batch_2023_24ScalarWhereWithAggregatesInput | batch_2023_24ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"batch_2023_24"> | number
    StudentId?: StringWithAggregatesFilter<"batch_2023_24"> | string
    StudentName?: StringWithAggregatesFilter<"batch_2023_24"> | string
    RollNoSem1?: StringWithAggregatesFilter<"batch_2023_24"> | string
    AdmissionApplicationNo?: StringWithAggregatesFilter<"batch_2023_24"> | string
    Altmail?: StringWithAggregatesFilter<"batch_2023_24"> | string
    FNum?: StringWithAggregatesFilter<"batch_2023_24"> | string
    Gender?: StringWithAggregatesFilter<"batch_2023_24"> | string
    MNum?: StringWithAggregatesFilter<"batch_2023_24"> | string
    PhNum1?: StringWithAggregatesFilter<"batch_2023_24"> | string
    PhNum2?: StringWithAggregatesFilter<"batch_2023_24"> | string
    RollNoSem5?: IntWithAggregatesFilter<"batch_2023_24"> | number
    aadhaar_number?: StringWithAggregatesFilter<"batch_2023_24"> | string
    abc_id?: StringWithAggregatesFilter<"batch_2023_24"> | string
    dob?: StringWithAggregatesFilter<"batch_2023_24"> | string
    mail?: StringWithAggregatesFilter<"batch_2023_24"> | string
    mobile_number_registered_with_aadhar?: StringWithAggregatesFilter<"batch_2023_24"> | string
    RollNoSem4?: IntWithAggregatesFilter<"batch_2023_24"> | number
    RollNoSem2?: StringWithAggregatesFilter<"batch_2023_24"> | string
    RollNoSem3?: IntWithAggregatesFilter<"batch_2023_24"> | number
  }

  export type Tjpatel_batch_2023_24WhereInput = {
    AND?: Tjpatel_batch_2023_24WhereInput | Tjpatel_batch_2023_24WhereInput[]
    OR?: Tjpatel_batch_2023_24WhereInput[]
    NOT?: Tjpatel_batch_2023_24WhereInput | Tjpatel_batch_2023_24WhereInput[]
    id?: IntFilter<"Tjpatel_batch_2023_24"> | number
    SrNo?: IntFilter<"Tjpatel_batch_2023_24"> | number
    ApplicantName?: StringFilter<"Tjpatel_batch_2023_24"> | string
    ApplicationNo?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Gender?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Category?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Disability?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Minority?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Nationality?: StringFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByCollege?: StringFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByStudent?: StringFilter<"Tjpatel_batch_2023_24"> | string
    EnrolmentNumber?: StringFilter<"Tjpatel_batch_2023_24"> | string
    ProgramType?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Verification?: StringFilter<"Tjpatel_batch_2023_24"> | string
    spid?: StringFilter<"Tjpatel_batch_2023_24"> | string
  }

  export type Tjpatel_batch_2023_24OrderByWithRelationInput = {
    id?: SortOrder
    SrNo?: SortOrder
    ApplicantName?: SortOrder
    ApplicationNo?: SortOrder
    Gender?: SortOrder
    Category?: SortOrder
    Disability?: SortOrder
    Minority?: SortOrder
    Nationality?: SortOrder
    PaymentByCollege?: SortOrder
    PaymentByStudent?: SortOrder
    EnrolmentNumber?: SortOrder
    ProgramType?: SortOrder
    Verification?: SortOrder
    spid?: SortOrder
  }

  export type Tjpatel_batch_2023_24WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Tjpatel_batch_2023_24WhereInput | Tjpatel_batch_2023_24WhereInput[]
    OR?: Tjpatel_batch_2023_24WhereInput[]
    NOT?: Tjpatel_batch_2023_24WhereInput | Tjpatel_batch_2023_24WhereInput[]
    SrNo?: IntFilter<"Tjpatel_batch_2023_24"> | number
    ApplicantName?: StringFilter<"Tjpatel_batch_2023_24"> | string
    ApplicationNo?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Gender?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Category?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Disability?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Minority?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Nationality?: StringFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByCollege?: StringFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByStudent?: StringFilter<"Tjpatel_batch_2023_24"> | string
    EnrolmentNumber?: StringFilter<"Tjpatel_batch_2023_24"> | string
    ProgramType?: StringFilter<"Tjpatel_batch_2023_24"> | string
    Verification?: StringFilter<"Tjpatel_batch_2023_24"> | string
    spid?: StringFilter<"Tjpatel_batch_2023_24"> | string
  }, "id">

  export type Tjpatel_batch_2023_24OrderByWithAggregationInput = {
    id?: SortOrder
    SrNo?: SortOrder
    ApplicantName?: SortOrder
    ApplicationNo?: SortOrder
    Gender?: SortOrder
    Category?: SortOrder
    Disability?: SortOrder
    Minority?: SortOrder
    Nationality?: SortOrder
    PaymentByCollege?: SortOrder
    PaymentByStudent?: SortOrder
    EnrolmentNumber?: SortOrder
    ProgramType?: SortOrder
    Verification?: SortOrder
    spid?: SortOrder
    _count?: Tjpatel_batch_2023_24CountOrderByAggregateInput
    _avg?: Tjpatel_batch_2023_24AvgOrderByAggregateInput
    _max?: Tjpatel_batch_2023_24MaxOrderByAggregateInput
    _min?: Tjpatel_batch_2023_24MinOrderByAggregateInput
    _sum?: Tjpatel_batch_2023_24SumOrderByAggregateInput
  }

  export type Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput = {
    AND?: Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput | Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput[]
    OR?: Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput[]
    NOT?: Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput | Tjpatel_batch_2023_24ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tjpatel_batch_2023_24"> | number
    SrNo?: IntWithAggregatesFilter<"Tjpatel_batch_2023_24"> | number
    ApplicantName?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    ApplicationNo?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Gender?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Category?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Disability?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Minority?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Nationality?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByCollege?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    PaymentByStudent?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    EnrolmentNumber?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    ProgramType?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    Verification?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
    spid?: StringWithAggregatesFilter<"Tjpatel_batch_2023_24"> | string
  }

  export type charusatWhereInput = {
    AND?: charusatWhereInput | charusatWhereInput[]
    OR?: charusatWhereInput[]
    NOT?: charusatWhereInput | charusatWhereInput[]
    id?: IntFilter<"charusat"> | number
    roll_no?: IntFilter<"charusat"> | number
    id_no?: StringFilter<"charusat"> | string
    name?: StringFilter<"charusat"> | string
    first_sem_sgpa?: FloatFilter<"charusat"> | number
    first_sem_backlogs?: IntFilter<"charusat"> | number
    second_sem_sgpa?: FloatFilter<"charusat"> | number
    second_sem_backlogs?: IntFilter<"charusat"> | number
    first_sem_cgpa?: FloatFilter<"charusat"> | number
  }

  export type charusatOrderByWithRelationInput = {
    id?: SortOrder
    roll_no?: SortOrder
    id_no?: SortOrder
    name?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type charusatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: charusatWhereInput | charusatWhereInput[]
    OR?: charusatWhereInput[]
    NOT?: charusatWhereInput | charusatWhereInput[]
    roll_no?: IntFilter<"charusat"> | number
    id_no?: StringFilter<"charusat"> | string
    name?: StringFilter<"charusat"> | string
    first_sem_sgpa?: FloatFilter<"charusat"> | number
    first_sem_backlogs?: IntFilter<"charusat"> | number
    second_sem_sgpa?: FloatFilter<"charusat"> | number
    second_sem_backlogs?: IntFilter<"charusat"> | number
    first_sem_cgpa?: FloatFilter<"charusat"> | number
  }, "id">

  export type charusatOrderByWithAggregationInput = {
    id?: SortOrder
    roll_no?: SortOrder
    id_no?: SortOrder
    name?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
    _count?: charusatCountOrderByAggregateInput
    _avg?: charusatAvgOrderByAggregateInput
    _max?: charusatMaxOrderByAggregateInput
    _min?: charusatMinOrderByAggregateInput
    _sum?: charusatSumOrderByAggregateInput
  }

  export type charusatScalarWhereWithAggregatesInput = {
    AND?: charusatScalarWhereWithAggregatesInput | charusatScalarWhereWithAggregatesInput[]
    OR?: charusatScalarWhereWithAggregatesInput[]
    NOT?: charusatScalarWhereWithAggregatesInput | charusatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"charusat"> | number
    roll_no?: IntWithAggregatesFilter<"charusat"> | number
    id_no?: StringWithAggregatesFilter<"charusat"> | string
    name?: StringWithAggregatesFilter<"charusat"> | string
    first_sem_sgpa?: FloatWithAggregatesFilter<"charusat"> | number
    first_sem_backlogs?: IntWithAggregatesFilter<"charusat"> | number
    second_sem_sgpa?: FloatWithAggregatesFilter<"charusat"> | number
    second_sem_backlogs?: IntWithAggregatesFilter<"charusat"> | number
    first_sem_cgpa?: FloatWithAggregatesFilter<"charusat"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sem5CreateInput = {
    id?: string
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
    sem: string
    AdmissionApplicationNo?: string
    Altmail?: string
    FNum?: string
    Gender?: string
    MNum?: string
    PhNum1?: string
    PhNum2?: string
    mail?: string
    aadhaar_number?: string
    abc_id?: string
    dob?: string
    mobile_number_registered_with_aadhar?: string
  }

  export type Sem5UncheckedCreateInput = {
    id?: string
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
    sem: string
    AdmissionApplicationNo?: string
    Altmail?: string
    FNum?: string
    Gender?: string
    MNum?: string
    PhNum1?: string
    PhNum2?: string
    mail?: string
    aadhaar_number?: string
    abc_id?: string
    dob?: string
    mobile_number_registered_with_aadhar?: string
  }

  export type Sem5UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
  }

  export type Sem5UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
  }

  export type Sem5CreateManyInput = {
    id?: string
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
    sem: string
    AdmissionApplicationNo?: string
    Altmail?: string
    FNum?: string
    Gender?: string
    MNum?: string
    PhNum1?: string
    PhNum2?: string
    mail?: string
    aadhaar_number?: string
    abc_id?: string
    dob?: string
    mobile_number_registered_with_aadhar?: string
  }

  export type Sem5UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
  }

  export type Sem5UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
    sem?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
  }

  export type Sem4CreateInput = {
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
  }

  export type Sem4UncheckedCreateInput = {
    id?: number
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
  }

  export type Sem4UpdateInput = {
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
  }

  export type Sem4UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
  }

  export type Sem4CreateManyInput = {
    id?: number
    RollNo: number
    EnrollmentNo: string
    StudentName: string
    LabBatchNo: string
  }

  export type Sem4UpdateManyMutationInput = {
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
  }

  export type Sem4UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    RollNo?: IntFieldUpdateOperationsInput | number
    EnrollmentNo?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    LabBatchNo?: StringFieldUpdateOperationsInput | string
  }

  export type batch_2024_25CreateInput = {
    name: string
    address: string
    city: string
    pincode: string
    student_mobile: string
    parent_mobile: string
    email: string
    birthdate: string
    gender: string
    aadhar_no: string
    religion: string
    cast: string
    stream: string
    tenth_percent: string
    twelfth_percent: string
    admission_no: number
  }

  export type batch_2024_25UncheckedCreateInput = {
    id?: number
    name: string
    address: string
    city: string
    pincode: string
    student_mobile: string
    parent_mobile: string
    email: string
    birthdate: string
    gender: string
    aadhar_no: string
    religion: string
    cast: string
    stream: string
    tenth_percent: string
    twelfth_percent: string
    admission_no: number
  }

  export type batch_2024_25UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    student_mobile?: StringFieldUpdateOperationsInput | string
    parent_mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    aadhar_no?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    tenth_percent?: StringFieldUpdateOperationsInput | string
    twelfth_percent?: StringFieldUpdateOperationsInput | string
    admission_no?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2024_25UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    student_mobile?: StringFieldUpdateOperationsInput | string
    parent_mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    aadhar_no?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    tenth_percent?: StringFieldUpdateOperationsInput | string
    twelfth_percent?: StringFieldUpdateOperationsInput | string
    admission_no?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2024_25CreateManyInput = {
    id?: number
    name: string
    address: string
    city: string
    pincode: string
    student_mobile: string
    parent_mobile: string
    email: string
    birthdate: string
    gender: string
    aadhar_no: string
    religion: string
    cast: string
    stream: string
    tenth_percent: string
    twelfth_percent: string
    admission_no: number
  }

  export type batch_2024_25UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    student_mobile?: StringFieldUpdateOperationsInput | string
    parent_mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    aadhar_no?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    tenth_percent?: StringFieldUpdateOperationsInput | string
    twelfth_percent?: StringFieldUpdateOperationsInput | string
    admission_no?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2024_25UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    student_mobile?: StringFieldUpdateOperationsInput | string
    parent_mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthdate?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    aadhar_no?: StringFieldUpdateOperationsInput | string
    religion?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    stream?: StringFieldUpdateOperationsInput | string
    tenth_percent?: StringFieldUpdateOperationsInput | string
    twelfth_percent?: StringFieldUpdateOperationsInput | string
    admission_no?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2023_24CreateInput = {
    StudentId: string
    StudentName: string
    RollNoSem1: string
    AdmissionApplicationNo: string
    Altmail: string
    FNum: string
    Gender: string
    MNum: string
    PhNum1: string
    PhNum2: string
    RollNoSem5: number
    aadhaar_number: string
    abc_id: string
    dob: string
    mail: string
    mobile_number_registered_with_aadhar: string
    RollNoSem4: number
    RollNoSem2: string
    RollNoSem3: number
  }

  export type batch_2023_24UncheckedCreateInput = {
    id?: number
    StudentId: string
    StudentName: string
    RollNoSem1: string
    AdmissionApplicationNo: string
    Altmail: string
    FNum: string
    Gender: string
    MNum: string
    PhNum1: string
    PhNum2: string
    RollNoSem5: number
    aadhaar_number: string
    abc_id: string
    dob: string
    mail: string
    mobile_number_registered_with_aadhar: string
    RollNoSem4: number
    RollNoSem2: string
    RollNoSem3: number
  }

  export type batch_2023_24UpdateInput = {
    StudentId?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    RollNoSem1?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    RollNoSem5?: IntFieldUpdateOperationsInput | number
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
    RollNoSem4?: IntFieldUpdateOperationsInput | number
    RollNoSem2?: StringFieldUpdateOperationsInput | string
    RollNoSem3?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2023_24UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    StudentId?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    RollNoSem1?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    RollNoSem5?: IntFieldUpdateOperationsInput | number
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
    RollNoSem4?: IntFieldUpdateOperationsInput | number
    RollNoSem2?: StringFieldUpdateOperationsInput | string
    RollNoSem3?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2023_24CreateManyInput = {
    id?: number
    StudentId: string
    StudentName: string
    RollNoSem1: string
    AdmissionApplicationNo: string
    Altmail: string
    FNum: string
    Gender: string
    MNum: string
    PhNum1: string
    PhNum2: string
    RollNoSem5: number
    aadhaar_number: string
    abc_id: string
    dob: string
    mail: string
    mobile_number_registered_with_aadhar: string
    RollNoSem4: number
    RollNoSem2: string
    RollNoSem3: number
  }

  export type batch_2023_24UpdateManyMutationInput = {
    StudentId?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    RollNoSem1?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    RollNoSem5?: IntFieldUpdateOperationsInput | number
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
    RollNoSem4?: IntFieldUpdateOperationsInput | number
    RollNoSem2?: StringFieldUpdateOperationsInput | string
    RollNoSem3?: IntFieldUpdateOperationsInput | number
  }

  export type batch_2023_24UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    StudentId?: StringFieldUpdateOperationsInput | string
    StudentName?: StringFieldUpdateOperationsInput | string
    RollNoSem1?: StringFieldUpdateOperationsInput | string
    AdmissionApplicationNo?: StringFieldUpdateOperationsInput | string
    Altmail?: StringFieldUpdateOperationsInput | string
    FNum?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    MNum?: StringFieldUpdateOperationsInput | string
    PhNum1?: StringFieldUpdateOperationsInput | string
    PhNum2?: StringFieldUpdateOperationsInput | string
    RollNoSem5?: IntFieldUpdateOperationsInput | number
    aadhaar_number?: StringFieldUpdateOperationsInput | string
    abc_id?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mobile_number_registered_with_aadhar?: StringFieldUpdateOperationsInput | string
    RollNoSem4?: IntFieldUpdateOperationsInput | number
    RollNoSem2?: StringFieldUpdateOperationsInput | string
    RollNoSem3?: IntFieldUpdateOperationsInput | number
  }

  export type Tjpatel_batch_2023_24CreateInput = {
    SrNo: number
    ApplicantName: string
    ApplicationNo: string
    Gender: string
    Category: string
    Disability: string
    Minority: string
    Nationality: string
    PaymentByCollege: string
    PaymentByStudent: string
    EnrolmentNumber: string
    ProgramType: string
    Verification: string
    spid: string
  }

  export type Tjpatel_batch_2023_24UncheckedCreateInput = {
    id?: number
    SrNo: number
    ApplicantName: string
    ApplicationNo: string
    Gender: string
    Category: string
    Disability: string
    Minority: string
    Nationality: string
    PaymentByCollege: string
    PaymentByStudent: string
    EnrolmentNumber: string
    ProgramType: string
    Verification: string
    spid: string
  }

  export type Tjpatel_batch_2023_24UpdateInput = {
    SrNo?: IntFieldUpdateOperationsInput | number
    ApplicantName?: StringFieldUpdateOperationsInput | string
    ApplicationNo?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Disability?: StringFieldUpdateOperationsInput | string
    Minority?: StringFieldUpdateOperationsInput | string
    Nationality?: StringFieldUpdateOperationsInput | string
    PaymentByCollege?: StringFieldUpdateOperationsInput | string
    PaymentByStudent?: StringFieldUpdateOperationsInput | string
    EnrolmentNumber?: StringFieldUpdateOperationsInput | string
    ProgramType?: StringFieldUpdateOperationsInput | string
    Verification?: StringFieldUpdateOperationsInput | string
    spid?: StringFieldUpdateOperationsInput | string
  }

  export type Tjpatel_batch_2023_24UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SrNo?: IntFieldUpdateOperationsInput | number
    ApplicantName?: StringFieldUpdateOperationsInput | string
    ApplicationNo?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Disability?: StringFieldUpdateOperationsInput | string
    Minority?: StringFieldUpdateOperationsInput | string
    Nationality?: StringFieldUpdateOperationsInput | string
    PaymentByCollege?: StringFieldUpdateOperationsInput | string
    PaymentByStudent?: StringFieldUpdateOperationsInput | string
    EnrolmentNumber?: StringFieldUpdateOperationsInput | string
    ProgramType?: StringFieldUpdateOperationsInput | string
    Verification?: StringFieldUpdateOperationsInput | string
    spid?: StringFieldUpdateOperationsInput | string
  }

  export type Tjpatel_batch_2023_24CreateManyInput = {
    id?: number
    SrNo: number
    ApplicantName: string
    ApplicationNo: string
    Gender: string
    Category: string
    Disability: string
    Minority: string
    Nationality: string
    PaymentByCollege: string
    PaymentByStudent: string
    EnrolmentNumber: string
    ProgramType: string
    Verification: string
    spid: string
  }

  export type Tjpatel_batch_2023_24UpdateManyMutationInput = {
    SrNo?: IntFieldUpdateOperationsInput | number
    ApplicantName?: StringFieldUpdateOperationsInput | string
    ApplicationNo?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Disability?: StringFieldUpdateOperationsInput | string
    Minority?: StringFieldUpdateOperationsInput | string
    Nationality?: StringFieldUpdateOperationsInput | string
    PaymentByCollege?: StringFieldUpdateOperationsInput | string
    PaymentByStudent?: StringFieldUpdateOperationsInput | string
    EnrolmentNumber?: StringFieldUpdateOperationsInput | string
    ProgramType?: StringFieldUpdateOperationsInput | string
    Verification?: StringFieldUpdateOperationsInput | string
    spid?: StringFieldUpdateOperationsInput | string
  }

  export type Tjpatel_batch_2023_24UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SrNo?: IntFieldUpdateOperationsInput | number
    ApplicantName?: StringFieldUpdateOperationsInput | string
    ApplicationNo?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    Category?: StringFieldUpdateOperationsInput | string
    Disability?: StringFieldUpdateOperationsInput | string
    Minority?: StringFieldUpdateOperationsInput | string
    Nationality?: StringFieldUpdateOperationsInput | string
    PaymentByCollege?: StringFieldUpdateOperationsInput | string
    PaymentByStudent?: StringFieldUpdateOperationsInput | string
    EnrolmentNumber?: StringFieldUpdateOperationsInput | string
    ProgramType?: StringFieldUpdateOperationsInput | string
    Verification?: StringFieldUpdateOperationsInput | string
    spid?: StringFieldUpdateOperationsInput | string
  }

  export type charusatCreateInput = {
    roll_no: number
    id_no: string
    name: string
    first_sem_sgpa: number
    first_sem_backlogs: number
    second_sem_sgpa: number
    second_sem_backlogs: number
    first_sem_cgpa: number
  }

  export type charusatUncheckedCreateInput = {
    id?: number
    roll_no: number
    id_no: string
    name: string
    first_sem_sgpa: number
    first_sem_backlogs: number
    second_sem_sgpa: number
    second_sem_backlogs: number
    first_sem_cgpa: number
  }

  export type charusatUpdateInput = {
    roll_no?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    first_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    first_sem_backlogs?: IntFieldUpdateOperationsInput | number
    second_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    second_sem_backlogs?: IntFieldUpdateOperationsInput | number
    first_sem_cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type charusatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roll_no?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    first_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    first_sem_backlogs?: IntFieldUpdateOperationsInput | number
    second_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    second_sem_backlogs?: IntFieldUpdateOperationsInput | number
    first_sem_cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type charusatCreateManyInput = {
    id?: number
    roll_no: number
    id_no: string
    name: string
    first_sem_sgpa: number
    first_sem_backlogs: number
    second_sem_sgpa: number
    second_sem_backlogs: number
    first_sem_cgpa: number
  }

  export type charusatUpdateManyMutationInput = {
    roll_no?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    first_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    first_sem_backlogs?: IntFieldUpdateOperationsInput | number
    second_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    second_sem_backlogs?: IntFieldUpdateOperationsInput | number
    first_sem_cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type charusatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roll_no?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    first_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    first_sem_backlogs?: IntFieldUpdateOperationsInput | number
    second_sem_sgpa?: FloatFieldUpdateOperationsInput | number
    second_sem_backlogs?: IntFieldUpdateOperationsInput | number
    first_sem_cgpa?: FloatFieldUpdateOperationsInput | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type Sem5CountOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    sem?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    mail?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
  }

  export type Sem5AvgOrderByAggregateInput = {
    RollNo?: SortOrder
  }

  export type Sem5MaxOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    sem?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    mail?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
  }

  export type Sem5MinOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
    sem?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    mail?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
  }

  export type Sem5SumOrderByAggregateInput = {
    RollNo?: SortOrder
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

  export type Sem4CountOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
  }

  export type Sem4AvgOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
  }

  export type Sem4MaxOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
  }

  export type Sem4MinOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
    EnrollmentNo?: SortOrder
    StudentName?: SortOrder
    LabBatchNo?: SortOrder
  }

  export type Sem4SumOrderByAggregateInput = {
    id?: SortOrder
    RollNo?: SortOrder
  }

  export type batch_2024_25CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    student_mobile?: SortOrder
    parent_mobile?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    aadhar_no?: SortOrder
    religion?: SortOrder
    cast?: SortOrder
    stream?: SortOrder
    tenth_percent?: SortOrder
    twelfth_percent?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2024_25AvgOrderByAggregateInput = {
    id?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2024_25MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    student_mobile?: SortOrder
    parent_mobile?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    aadhar_no?: SortOrder
    religion?: SortOrder
    cast?: SortOrder
    stream?: SortOrder
    tenth_percent?: SortOrder
    twelfth_percent?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2024_25MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    student_mobile?: SortOrder
    parent_mobile?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    aadhar_no?: SortOrder
    religion?: SortOrder
    cast?: SortOrder
    stream?: SortOrder
    tenth_percent?: SortOrder
    twelfth_percent?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2024_25SumOrderByAggregateInput = {
    id?: SortOrder
    admission_no?: SortOrder
  }

  export type batch_2023_24CountOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    StudentName?: SortOrder
    RollNoSem1?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    RollNoSem5?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mail?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem2?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type batch_2023_24AvgOrderByAggregateInput = {
    id?: SortOrder
    RollNoSem5?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type batch_2023_24MaxOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    StudentName?: SortOrder
    RollNoSem1?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    RollNoSem5?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mail?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem2?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type batch_2023_24MinOrderByAggregateInput = {
    id?: SortOrder
    StudentId?: SortOrder
    StudentName?: SortOrder
    RollNoSem1?: SortOrder
    AdmissionApplicationNo?: SortOrder
    Altmail?: SortOrder
    FNum?: SortOrder
    Gender?: SortOrder
    MNum?: SortOrder
    PhNum1?: SortOrder
    PhNum2?: SortOrder
    RollNoSem5?: SortOrder
    aadhaar_number?: SortOrder
    abc_id?: SortOrder
    dob?: SortOrder
    mail?: SortOrder
    mobile_number_registered_with_aadhar?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem2?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type batch_2023_24SumOrderByAggregateInput = {
    id?: SortOrder
    RollNoSem5?: SortOrder
    RollNoSem4?: SortOrder
    RollNoSem3?: SortOrder
  }

  export type Tjpatel_batch_2023_24CountOrderByAggregateInput = {
    id?: SortOrder
    SrNo?: SortOrder
    ApplicantName?: SortOrder
    ApplicationNo?: SortOrder
    Gender?: SortOrder
    Category?: SortOrder
    Disability?: SortOrder
    Minority?: SortOrder
    Nationality?: SortOrder
    PaymentByCollege?: SortOrder
    PaymentByStudent?: SortOrder
    EnrolmentNumber?: SortOrder
    ProgramType?: SortOrder
    Verification?: SortOrder
    spid?: SortOrder
  }

  export type Tjpatel_batch_2023_24AvgOrderByAggregateInput = {
    id?: SortOrder
    SrNo?: SortOrder
  }

  export type Tjpatel_batch_2023_24MaxOrderByAggregateInput = {
    id?: SortOrder
    SrNo?: SortOrder
    ApplicantName?: SortOrder
    ApplicationNo?: SortOrder
    Gender?: SortOrder
    Category?: SortOrder
    Disability?: SortOrder
    Minority?: SortOrder
    Nationality?: SortOrder
    PaymentByCollege?: SortOrder
    PaymentByStudent?: SortOrder
    EnrolmentNumber?: SortOrder
    ProgramType?: SortOrder
    Verification?: SortOrder
    spid?: SortOrder
  }

  export type Tjpatel_batch_2023_24MinOrderByAggregateInput = {
    id?: SortOrder
    SrNo?: SortOrder
    ApplicantName?: SortOrder
    ApplicationNo?: SortOrder
    Gender?: SortOrder
    Category?: SortOrder
    Disability?: SortOrder
    Minority?: SortOrder
    Nationality?: SortOrder
    PaymentByCollege?: SortOrder
    PaymentByStudent?: SortOrder
    EnrolmentNumber?: SortOrder
    ProgramType?: SortOrder
    Verification?: SortOrder
    spid?: SortOrder
  }

  export type Tjpatel_batch_2023_24SumOrderByAggregateInput = {
    id?: SortOrder
    SrNo?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type charusatCountOrderByAggregateInput = {
    id?: SortOrder
    roll_no?: SortOrder
    id_no?: SortOrder
    name?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type charusatAvgOrderByAggregateInput = {
    id?: SortOrder
    roll_no?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type charusatMaxOrderByAggregateInput = {
    id?: SortOrder
    roll_no?: SortOrder
    id_no?: SortOrder
    name?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type charusatMinOrderByAggregateInput = {
    id?: SortOrder
    roll_no?: SortOrder
    id_no?: SortOrder
    name?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type charusatSumOrderByAggregateInput = {
    id?: SortOrder
    roll_no?: SortOrder
    first_sem_sgpa?: SortOrder
    first_sem_backlogs?: SortOrder
    second_sem_sgpa?: SortOrder
    second_sem_backlogs?: SortOrder
    first_sem_cgpa?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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